import type { CommonSettings } from '../types'

/**
 * Рендер шапки сайту (Header) з логотипом у ніжно-рожевих тонах та навігацією
 */
export function renderHeader(settings: CommonSettings): string {
  const { siteName, tagline = 'Довідник Флориста', menu = [] } = settings

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
      </nav>
    </header>
  `
}
