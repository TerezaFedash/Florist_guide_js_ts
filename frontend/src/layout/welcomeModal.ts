/**
 * Початковий екран вибору режиму доступу (Florist Guide)
 * Дозволяє користувачеві вибрати: переглянути сайт як відвідувач або перейти в адмінку Payload CMS
 */
export function renderWelcomeModal(): string {
  const cmsAdminUrl =
    (import.meta.env.VITE_CMS_URL as string | undefined) ||
    (import.meta.env.VITE_API_URL as string | undefined) ||
    'https://florist-guide-js-ts-cms.vercel.app'

  return `
    <div id="welcome-modal" class="welcome-overlay" role="dialog" aria-modal="true" aria-labelledby="welcome-title">
      <div class="welcome-card">
        <div class="welcome-card__badge">🌸 Вебзастосунок</div>
        <h1 id="welcome-title" class="welcome-card__title">Florist Guide</h1>
        <p class="welcome-card__tagline">Довідник Флориста</p>
        
        <p class="welcome-card__desc">
          Оберіть, у якому режимі ви бажаєте переглянути систему:
        </p>

        <div class="welcome-card__choices">
          <!-- Режим 1: Звичайний користувач сайту -->
          <button id="btn-enter-user" class="welcome-choice-btn welcome-choice-btn--primary">
            <span class="welcome-choice-btn__icon">👤</span>
            <div class="welcome-choice-btn__text">
              <strong class="welcome-choice-btn__title">Переглянути як Користувач</strong>
              <span class="welcome-choice-btn__subtitle">Публічний довідник рослин, поради догляду та сезонний календар</span>
            </div>
          </button>

          <!-- Режим 2: Вхід як адміністратор у CMS -->
          <a id="btn-enter-admin" href="${cmsAdminUrl}/admin" target="_blank" rel="noopener noreferrer" class="welcome-choice-btn welcome-choice-btn--secondary">
            <span class="welcome-choice-btn__icon">🛠️</span>
            <div class="welcome-choice-btn__text">
              <strong class="welcome-choice-btn__title">Увійти як Адміністратор</strong>
              <span class="welcome-choice-btn__subtitle">Панель керування вмістом Payload CMS (/admin)</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  `
}

/**
 * Ініціалізація взаємодії з модальним вікном вибору режиму
 */
export function initWelcomeModal(): void {
  const modal = document.querySelector<HTMLDivElement>('#welcome-modal')
  const enterUserBtn = document.querySelector<HTMLButtonElement>('#btn-enter-user')
  const reopenBtn = document.querySelector<HTMLButtonElement>('#btn-reopen-modal')

  if (!modal) return

  enterUserBtn?.addEventListener('click', () => {
    modal.classList.add('welcome-overlay--hidden')
  })

  reopenBtn?.addEventListener('click', () => {
    modal.classList.remove('welcome-overlay--hidden')
  })
}
