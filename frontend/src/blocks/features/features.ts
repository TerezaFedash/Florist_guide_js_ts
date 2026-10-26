import './features.css'
import type { FeaturesBlock } from '../../types'

/**
 * Рендер блоку правил та особливостей догляду (Features)
 */
export function features(block: FeaturesBlock): string {
  const {
    anchor = 'care',
    badge = 'Базові правила',
    title = 'Основи догляду за зрізаними квітами',
    subtitle = '',
    items = [],
  } = block

  return `
    <section class="features" id="${anchor}">
      <div class="section-header">
        ${badge ? `<div class="section-badge">${badge}</div>` : ''}
        <h2 class="section-title">${title}</h2>
        ${subtitle ? `<p class="section-subtitle">${subtitle}</p>` : ''}
      </div>

      <div class="features__grid">
        ${items
          .map(
            ({ icon, title, text }, index) => `
          <article class="feature-card">
            <div class="feature-card__header">
              <span class="feature-card__icon">${icon}</span>
              <span class="feature-card__number">0${index + 1}</span>
            </div>
            <h3 class="feature-card__title">${title}</h3>
            <p class="feature-card__text">${text}</p>
          </article>
        `,
          )
          .join('')}
      </div>
    </section>
  `
}
