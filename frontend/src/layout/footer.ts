import type { CommonSettings } from '../types'

/**
 * Рендер підвалу сайту (Footer) з копірайтом, роком та інформацією про авторів
 */
export function renderFooter(settings: CommonSettings): string {
  const currentYear = new Date().getFullYear()
  const { siteName, footer } = settings

  return `
    <footer class="footer">
      <div class="footer__content">
        <div>
          <div class="footer__brand">🌸 ${siteName}</div>
          <p class="footer__text">${footer.text}</p>
        </div>

        <div class="footer__credits">
          <div>© ${currentYear} ${siteName}. Всі права захищено.</div>
          <div style="margin-top: 6px;">
            Розробка звіту з практики: <span class="footer__student-badge">${footer.author || 'Гусаров, Юрчишин'}</span>
          </div>
        </div>
      </div>
    </footer>
  `
}
