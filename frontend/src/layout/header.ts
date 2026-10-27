import type { CommonSettings } from '../types'

/**
 * Рендер шапки сайту (Header) у ніжно-рожевій палітрі
 * Містить логотип Florist Guide, навігацію та швидкі кнопки перемикання режиму / входу в адмінку
 */
export function renderHeader(settings: CommonSettings): string {
  const { siteName = 'Florist Guide', tagline = 'Довідник Флориста', menu = [] } = settings
  const cmsAdminUrl =
    (import.meta.env.VITE_CMS_URL as string | undefined) ||
    (import.meta.env.VITE_API_URL as string | undefined) ||
    'http://localhost:3000'

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
        ${menu
          .map(
            ({ label, link }) => `
            <a class="header__link" href="${link}">${label}</a>
          `,
          )
          .join('')}

        <!-- Кнопки швидкого вибору режиму та входу в CMS -->
        <button id="btn-reopen-modal" class="header__mode-btn" title="Змінити режим перегляду">
          🔄 Режим
        </button>
        <a class="btn btn--secondary btn--sm" href="${cmsAdminUrl}/admin" target="_blank" rel="noopener noreferrer">
          🛠️ CMS Адмінка
        </a>
      </nav>
    </header>
  `
}
