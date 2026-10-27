import './tips.css'
import type { TipsBlock } from '../../types'

export function tips(block: TipsBlock): string {
  const {
    anchor = 'tips',
    badge = 'Поради флориста',
    title = 'Секрети та лайфхаки свіжості',
    cards = [],
  } = block

  return `
    <section class="tips" id="${anchor}">
      <div class="section-header">
        ${badge ? `<div class="section-badge">${badge}</div>` : ''}
        <h2 class="section-title">${title}</h2>
      </div>

      <div class="tips__grid">
        ${cards
          .map(
            ({ tag, title, content }) => `
          <div class="tip-card">
            <div class="tip-card__badge">${tag}</div>
            <h3 class="tip-card__title">${title}</h3>
            <p class="tip-card__content">${content}</p>
          </div>
        `,
          )
          .join('')}
      </div>
    </section>
  `
}
