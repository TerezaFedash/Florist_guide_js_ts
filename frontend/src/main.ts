import './styles/base.css'
import type { CommonSettings, PageResponse, UIStatePayload } from './types'
import { getSettings, getPage } from './api'
import { renderBlocks } from './render'
import { renderHeader } from './layout/header'
import { renderFooter } from './layout/footer'
import { renderWelcomeModal, initWelcomeModal } from './layout/welcomeModal'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('Кореневий DOM-елемент #app не знайдено.')
}

function renderUIState(payload: UIStatePayload): void {
  if (!app) return

  switch (payload.state) {
    case 'loading': {
      app.innerHTML = `
        <div class="ui-state-container">
          <div class="loading-box">
            <div class="loading-spinner"></div>
            <h2 class="loading-title">Завантаження Florist Guide...</h2>
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

      document.querySelector('#btn-retry')?.addEventListener('click', () => {
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
        ${renderWelcomeModal()}
        ${renderHeader(settings)}
        <main>
          ${renderBlocks(page.blocks)}
        </main>
        ${renderFooter(settings)}
      `

      initWelcomeModal()

      initCategoryTabs()
      break
    }
  }
}

function initCategoryTabs(): void {
  const tabs = document.querySelectorAll<HTMLButtonElement>('.tab-btn')
  const cards = document.querySelectorAll<HTMLElement>('.flower-card')

  if (!tabs.length || !cards.length) return

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => {
        t.classList.remove('active')
        t.setAttribute('aria-selected', 'false')
      })

      tab.classList.add('active')
      tab.setAttribute('aria-selected', 'true')

      const selectedCategory = tab.dataset.category || 'all'

      cards.forEach((card) => {
        const cardCategory = card.dataset.category

        if (selectedCategory === 'all' || cardCategory === selectedCategory) {
          card.style.display = 'flex'
          card.style.opacity = '1'
        } else {
          card.style.display = 'none'
        }
      })
    })
  })
}

async function initApp(forceFallback: boolean = false): Promise<void> {
  renderUIState({
    state: 'loading',
    message: 'Отримуємо конфігурацію блоків та налаштування сайту...',
  })

  try {
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

initApp()
