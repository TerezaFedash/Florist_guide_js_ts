import './hero.css'
import type { HeroBlock } from '../../types'

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
    'https://plus.unsplash.com/premium_photo-1676475964992-6404b8db0b53?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
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
