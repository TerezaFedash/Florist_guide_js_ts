import type { CommonSettings } from '../types'

/**
 * Рендер шапки сайту (Header) у ніжно-рожевій палітрі
 * Навігація містить чіткі розділи: Головна, Квіти, Догляд, Поради, Сезон
 * та кнопки перемикання режиму і переходу в адмінку CMS
 */
export function renderHeader(settings: CommonSettings): string {
  const { siteName = 'Florist Guide', tagline = 'Довідник Флориста', menu = [] } = settings
  const cmsAdminUrl =
    (import.meta.env.VITE_CMS_URL as string | undefined) ||
    (import.meta.env.VITE_API_URL as string | undefined) ||
    'https://florist-guide-js-ts-cms.vercel.app'

  // Стандартний список розділів для клієнта
  const defaultMenu = [
    { label: 'Головна', link: '#hero' },
    { label: 'Квіти', link: '#catalog' },
    { label: 'Догляд', link: '#care' },
    { label: 'Поради', link: '#tips' },
    { label: 'Сезон', link: '#seasonal' },
  ]

  const navItems = menu && menu.length > 0 ? menu : defaultMenu

  return `
    <header class="header">
      <a class="header__brand" href="#hero">
        <span class="header__logo-icon">🌸</span>
        <div>
          <div class="header__title">${siteName}</div>
          <div class="header__tagline">${tagline}</div>
        </div>
      </a>

      <nav class="header__nav" aria-label="Головна навігація">
        <div class="header__links">
          ${navItems
            .map(
              ({ label, link }) => `
              <a class="header__link" href="${link}">${label}</a>
            `,
            )
            .join('')}
        </div>

        <div class="header__actions">
          <button id="btn-reopen-modal" class="header__mode-btn" title="Змінити режим перегляду">
            🔄 Режим
          </button>
          <a class="btn btn--secondary btn--sm" href="${cmsAdminUrl}/admin" target="_blank" rel="noopener noreferrer">
            🛠️ CMS Адмінка
          </a>
        </div>
      </nav>
    </header>
  `
}
