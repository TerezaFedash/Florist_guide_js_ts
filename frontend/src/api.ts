import type { CommonSettings, PageResponse } from './types'
import { fallbackSettings, fallbackPage } from './data/mockData'

const API_BASE_URL =
  import.meta.env.VITE_API_URL || import.meta.env.API_URL || 'http://localhost:3000'

async function getJson<T>(endpoint: string): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`

  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
  })

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}))
    const message = errorBody?.error || `Помилка сервера: HTTP ${response.status}`
    throw new Error(message)
  }

  const data: T = await response.json()
  return data
}

export async function getSettings(): Promise<{ data: CommonSettings; source: 'api' | 'fallback' }> {
  const urlParams = new URLSearchParams(window.location.search)
  if (urlParams.get('simulateError') === 'common') {
    throw new Error('Симуляція помилки: не вдалося завантажити налаштування сайту з CMS.')
  }

  try {
    const data = await getJson<CommonSettings>('/api/common')
    return { data, source: 'api' }
  } catch (err) {
    console.warn('API /api/common недоступний, використовуємо навчальні дані довідника.', err)
    return { data: fallbackSettings, source: 'fallback' }
  }
}

export async function getPage(
  path: string,
): Promise<{ data: PageResponse; source: 'api' | 'fallback' }> {
  const urlParams = new URLSearchParams(window.location.search)
  if (urlParams.get('simulateError') === 'true' || urlParams.get('simulateError') === 'page') {
    throw new Error('Помилка зʼєднання з Neon PostgreSQL: перевищено час очікування відповіді.')
  }

  try {
    const data = await getJson<PageResponse>(`/api/page?path=${encodeURIComponent(path)}`)
    return { data, source: 'api' }
  } catch (err) {
    console.warn(`API /api/page?path=${path} недоступний, використовуємо навчальні блоки.`, err)
    return { data: fallbackPage, source: 'fallback' }
  }
}
