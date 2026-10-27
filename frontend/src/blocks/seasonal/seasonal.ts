import './seasonal.css'
import type { SeasonalBlock } from '../../types'

export function seasonal(block: SeasonalBlock): string {
  const {
    anchor = 'seasonal',
    badge = '📅 Календар флориста',
    title = 'Сезонний довідник рослин',
    subtitle = '',
    seasons = [],
  } = block

  return `
    <section class="seasonal" id="${anchor}">
      <div class="section-header">
        ${badge ? `<div class="section-badge">${badge}</div>` : ''}
        <h2 class="section-title">${title}</h2>
        ${subtitle ? `<p class="section-subtitle">${subtitle}</p>` : ''}
      </div>

      <div class="seasonal__grid">
        ${seasons
          .map(
            ({ season, emoji, months, flowers, tip }) => `
          <article class="season-card">
            <div class="season-card__header">
              <span class="season-card__emoji">${emoji}</span>
              <div>
                <h3 class="season-card__title">${season}</h3>
                <span class="season-card__months">${months}</span>
              </div>
            </div>

            <div class="season-card__flowers">
              <div class="season-card__label">Рекомендовані квіти:</div>
              <div class="season-card__tags">
                ${flowers.map((f) => `<span class="season-tag">${f}</span>`).join('')}
              </div>
            </div>

            <div class="season-card__tip">
              <span class="season-card__tip-icon">💡</span>
              <p class="season-card__tip-text">${tip}</p>
            </div>
          </article>
        `,
          )
          .join('')}
      </div>
    </section>
  `
}
