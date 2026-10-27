import type { CommonSettings } from '../types'

export function renderFooter(settings: CommonSettings): string {
  const currentYear = new Date().getFullYear()
  const { siteName = 'Florist Guide', footer } = settings

  return `
    <footer class="footer">
      <div class="footer__content">
        <div>
          <div class="footer__brand">🌸 ${siteName}</div>
          <p class="footer__text">${footer.text}</p>
        </div>

        <div class="footer__credits">
          <div>© ${currentYear} ${siteName} — Довідник Флориста. Всі права захищено.</div>
        </div>
      </div>
    </footer>
  `
}
