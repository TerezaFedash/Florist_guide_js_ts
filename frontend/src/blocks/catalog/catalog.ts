import './catalog.css'
import type { CatalogBlock, FlowerCareLevel } from '../../types'

function getCareBadge(level: FlowerCareLevel): { label: string; className: string } {
  switch (level) {
    case 'easy':
      return { label: '🌱 Легкий догляд', className: 'badge--easy' }
    case 'medium':
      return { label: '✨ Середній догляд', className: 'badge--medium' }
    case 'hard':
      return { label: '🌸 Вибаглива', className: 'badge--hard' }
    default:
      return { label: '🌸 Догляд', className: 'badge--easy' }
  }
}

/**
 * Рендер каталогу квітів із картками та фільтрами
 */
export function catalog(block: CatalogBlock): string {
  const {
    anchor = 'catalog',
    badge = 'Каталог рослин',
    title = 'Популярні квіти для букетів',
    subtitle = '',
    items = [],
  } = block

  return `
    <section class="catalog" id="${anchor}">
      <div class="section-header">
        ${badge ? `<div class="section-badge">${badge}</div>` : ''}
        <h2 class="section-title">${title}</h2>
        ${subtitle ? `<p class="section-subtitle">${subtitle}</p>` : ''}
        
        <!-- Кнопки фільтрації за рівнем догляду -->
        <div class="catalog__filters" role="group" aria-label="Фільтри складності догляду">
          <button class="filter-btn active" data-filter="all">Всі квіти (${items.length})</button>
          <button class="filter-btn" data-filter="easy">🌱 Легкий догляд</button>
          <button class="filter-btn" data-filter="medium">✨ Середній</button>
          <button class="filter-btn" data-filter="hard">🌸 Вибагливі</button>
        </div>
      </div>

      <div class="catalog__grid">
        ${items
          .map((item) => {
            const careInfo = getCareBadge(item.careLevel)
            const imgSrc =
              item.image?.src ||
              'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&auto=format&fit=crop&q=80'
            const imgAlt = item.image?.alt || item.name

            return `
            <article class="flower-card" data-care-level="${item.careLevel}">
              <div class="flower-card__image-container">
                <img class="flower-card__image" src="${imgSrc}" alt="${imgAlt}" loading="lazy" />
                <span class="flower-card__care-badge ${careInfo.className}">
                  ${careInfo.label}
                </span>
              </div>

              <div class="flower-card__body">
                <div class="flower-card__meta">
                  <span class="flower-card__vase-life">⏳ ${item.vaseLife}</span>
                  ${item.season ? `<span class="flower-card__season">🌿 ${item.season}</span>` : ''}
                </div>

                <h3 class="flower-card__title">${item.name}</h3>
                ${item.latinName ? `<div class="flower-card__latin">${item.latinName}</div>` : ''}
                
                <p class="flower-card__description">${item.description}</p>
              </div>
            </article>
          `
          })
          .join('')}
      </div>
    </section>
  `
}
