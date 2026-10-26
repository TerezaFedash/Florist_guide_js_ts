import './hero.css'
import type { HeroBlock } from '../../types'

/**
 * Рендер блоку Hero (головний екран лендінгу)
 */
export function hero(block: HeroBlock): string {
  const {
    anchor = 'hero',
    badge = '🌸 Довідник Флориста',
    title,
    subtitle = '',
    image,
    buttons = [],
  } = block

  const imageSrc =
    image?.src ||
    'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=900&auto=format&fit=crop&q=80'
  const imageAlt = image?.alt || title

  return `
    <section class="hero" id="${anchor}">
      <div class="hero__content">
        ${badge ? `<div class="section-badge">${badge}</div>` : ''}
        <h1 class="hero__title">${title}</h1>
        ${subtitle ? `<p class="hero__subtitle">${subtitle}</p>` : ''}
        
        ${
          buttons.length > 0
            ? `
          <div class="hero__actions">
            ${buttons
              .map(
                ({ text, link, variant }) => `
              <a class="btn btn--${variant}" href="${link}">${text}</a>
            `,
              )
              .join('')}
          </div>
        `
            : ''
        }
      </div>

      <div class="hero__image-wrapper">
        <img class="hero__image" src="${imageSrc}" alt="${imageAlt}" loading="eager" />
        <div class="hero__decorative-circle"></div>
      </div>
    </section>
  `
}
