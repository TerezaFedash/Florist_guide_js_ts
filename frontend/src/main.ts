import './styles/base.css'
import type { CommonSettings, PageResponse, UIStatePayload } from './types'
import { getSettings, getPage } from './api'
import { renderBlocks } from './render'
import { renderHeader } from './layout/header'
import { renderFooter } from './layout/footer'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('Кореневий DOM-елемент #app не знайдено.')
}

/**
 * Відображення різних станів користувацького інтерфейсу (Loading / Error / Success)
 */
function renderUIState(payload: UIStatePayload): void {
  if (!app) return

  switch (payload.state) {
    case 'loading': {
      app.innerHTML = `
        <div class="ui-state-container">
          <div class="loading-box">
            <div class="loading-spinner"></div>
            <h2 class="loading-title">Завантаження ФлораГід...</h2>
            <p class="loading-desc">${payload.message || 'Отримуємо дані з Payload CMS та хмарної БД Neon'}</p>
          </div>
        </div>
      `
      break
    }

    case 'error': {
      app.innerHTML = `
        <div class="ui-state-container">
          <div class="error-box">
            <span class="error-icon">🥀</span>
            <h2 class="error-title">Не вдалося завантажити довідник</h2>
            <div class="error-message">
              ${payload.message}
              ${payload.errorDetails ? `<br><small style="opacity: 0.75;">Деталі: ${payload.errorDetails}</small>` : ''}
            </div>
            <div class="error-actions">
              ${
                payload.canRetry
                  ? `<button id="btn-retry" class="btn btn--primary">🔄 Спробувати знову</button>`
                  : ''
              }
              <button id="btn-demo-mode" class="btn btn--secondary">🌸 Завантажити демо-довідник</button>
            </div>
          </div>
        </div>
      `

      // Додаємо обробники подій для кнопок стану помилки
      document.querySelector('#btn-retry')?.addEventListener('click', () => {
        // Очищаємо прапорець симуляції помилки, якщо він був у URL
        const url = new URL(window.location.href)
        url.searchParams.delete('simulateError')
        window.history.replaceState({}, '', url.toString())
        initApp()
      })

      document.querySelector('#btn-demo-mode')?.addEventListener('click', () => {
        const url = new URL(window.location.href)
        url.searchParams.delete('simulateError')
        window.history.replaceState({}, '', url.toString())
        initApp(true)
      })
      break
    }

    case 'success': {
      const { settings, page } = payload.data

      document.title = `${page.title} — ${settings.siteName}`

      app.innerHTML = `
        ${renderHeader(settings)}
        <main>
          ${renderBlocks(page.blocks)}
        </main>
        ${renderFooter(settings)}

        <!-- Панель для тестування станів у звіті з практики -->
        <aside class="demo-toolbar" aria-label="Панель студента для звіту">
          <span>🌸 <strong>ФлораГід</strong> (${payload.data.source === 'api' ? 'Payload API' : 'Демо-режим'})</span>
          <button id="btn-simulate-error" title="Для скріншоту помилки у звіті">⚠️ Скрін помилки</button>
          <button id="btn-simulate-loading" title="Для скріншоту завантаження у звіті">⏳ Скрін завантаження</button>
        </aside>
      `

      // Ініціалізація інтерактивних фільтрів каталогу квітів
      initCatalogFilters()

      // Ініціалізація кнопок тестової панелі (для легкого зняття скріншотів для розділу 2.4)
      document.querySelector('#btn-simulate-error')?.addEventListener('click', () => {
        const url = new URL(window.location.href)
        url.searchParams.set('simulateError', 'true')
        window.history.replaceState({}, '', url.toString())
        initApp()
      })

      document.querySelector('#btn-simulate-loading')?.addEventListener('click', () => {
        renderUIState({
          state: 'loading',
          message: 'Демонстрація стану очікування відповіді від API / Neon DB',
        })
        setTimeout(() => {
          initApp()
        }, 3500)
      })
      break
    }
  }
}

/**
 * Клієнтська інтерактивність: фільтрація карток квітів за рівнем догляду
 */
function initCatalogFilters(): void {
  const filterButtons = document.querySelectorAll<HTMLButtonElement>('.filter-btn')
  const flowerCards = document.querySelectorAll<HTMLElement>('.flower-card')

  if (!filterButtons.length || !flowerCards.length) return

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'))
      btn.classList.add('active')

      const selectedFilter = btn.dataset.filter || 'all'

      flowerCards.forEach((card) => {
        const careLevel = card.dataset.careLevel

        if (selectedFilter === 'all' || careLevel === selectedFilter) {
          card.style.display = 'flex'
          card.style.animation = 'fadeIn 0.3s ease forwards'
        } else {
          card.style.display = 'none'
        }
      })
    })
  })
}

/**
 * Основна функція ініціалізації та асинхронного завантаження даних
 */
async function initApp(forceFallback: boolean = false): Promise<void> {
  renderUIState({
    state: 'loading',
    message: 'Отримуємо конфігурацію блоків та налаштування сайту...',
  })

  try {
    // Якщо користувач форсує демо або оффлайн
    if (forceFallback) {
      const { fallbackSettings, fallbackPage } = await import('./data/mockData')
      renderUIState({
        state: 'success',
        data: {
          settings: fallbackSettings,
          page: fallbackPage,
          fetchedAt: Date.now(),
          source: 'fallback',
        },
      })
      return
    }

    // Паралельні асинхронні запити за допомогою Promise.all
    const [settingsResult, pageResult] = await Promise.all([
      getSettings(),
      getPage(window.location.pathname || '/'),
    ])

    const settings: CommonSettings = settingsResult.data
    const page: PageResponse = pageResult.data

    renderUIState({
      state: 'success',
      data: {
        settings,
        page,
        fetchedAt: Date.now(),
        source: settingsResult.source === 'fallback' ? 'fallback' : 'api',
      },
    })
  } catch (error: any) {
    console.error('Помилка під час ініціалізації додатку:', error)
    renderUIState({
      state: 'error',
      message: error?.message || 'Щось пішло не так під час зʼєднання з сервером.',
      canRetry: true,
    })
  }
}

// Запуск застосунку
initApp()
