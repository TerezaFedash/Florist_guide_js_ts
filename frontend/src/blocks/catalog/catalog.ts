import './catalog.css'
import type { CatalogBlock, FlowerCareLevel, FlowerCategory } from '../../types'

/** Мітки рівня складності догляду з класами для стилізації */
function getCareBadge(level: FlowerCareLevel): { label: string; className: string } {
  switch (level) {
    case 'easy':   return { label: '🌱 Легкий', className: 'badge--easy' }
    case 'medium': return { label: '✨ Середній', className: 'badge--medium' }
    case 'hard':   return { label: '🌸 Вибаглива', className: 'badge--hard' }
    default:       return { label: '🌸 Догляд', className: 'badge--easy' }
  }
}

/** Конфігурація вкладок категорій */
const CATEGORY_TABS: { value: string; label: string }[] = [
  { value: 'all',        label: '✦ Всі' },
  { value: 'cut',        label: '💐 Зрізані' },
  { value: 'houseplant', label: '🪴 Кімнатні' },
  { value: 'dried',      label: '🍂 Сухоцвіти' },
  { value: 'exotic',     label: '🌺 Екзотичні' },
]

/**
 * Рендер каталогу квітів із картками та фільтрами за категорією
 */
export function catalog(block: CatalogBlock): string {
  const {
    anchor = 'catalog',
    badge = 'Каталог рослин',
    title = 'Квіти та рослини',
    subtitle = '',
    items = [],
  } = block

  return `
    <section class="catalog" id="${anchor}">
      <div class="section-header">
        ${badge ? `<div class="section-badge">${badge}</div>` : ''}
        <h2 class="section-title">${title}</h2>
        ${subtitle ? `<p class="section-subtitle">${subtitle}</p>` : ''}

        <div class="catalog__tabs" role="tablist" aria-label="Категорії рослин">
          ${CATEGORY_TABS.map(tab => `
            <button
              class="tab-btn${tab.value === 'all' ? ' active' : ''}"
              data-category="${tab.value}"
              role="tab"
              aria-selected="${tab.value === 'all'}"
            >${tab.label}</button>
          `).join('')}
        </div>
      </div>

      <div class="catalog__grid" id="catalog-grid">
        ${items.map(item => {
          const care = getCareBadge(item.careLevel)
          const imgSrc = item.image?.src || 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&auto=format&fit=crop&q=80'
          const imgAlt = item.image?.alt || item.name
          const category: FlowerCategory = item.category || 'cut'

          return `
            <article class="flower-card" data-category="${category}" data-care="${item.careLevel}">
              <div class="flower-card__img-wrap">
                <img class="flower-card__img" src="${imgSrc}" alt="${imgAlt}" loading="lazy" />
                <span class="care-badge ${care.className}">${care.label}</span>
              </div>

              <div class="flower-card__body">
                <div class="flower-card__meta">
                  <span class="meta-pill">⏳ ${item.vaseLife}</span>
                  ${item.season ? `<span class="meta-pill">🌿 ${item.season}</span>` : ''}
                </div>
                <h3 class="flower-card__name">${item.name}</h3>
                ${item.latinName ? `<p class="flower-card__latin">${item.latinName}</p>` : ''}
                <p class="flower-card__desc">${item.description}</p>
              </div>
            </article>
          `
        }).join('')}
      </div>
    </section>
  `
}
