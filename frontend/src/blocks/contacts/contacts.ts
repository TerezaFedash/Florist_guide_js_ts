import './contacts.css'
import type { ContactsBlock } from '../../types'

/**
 * Рендер блоку контактів та локації флористичного простору (Contacts)
 */
export function contacts(block: ContactsBlock): string {
  const {
    anchor = 'contacts',
    badge = 'Квітковий простір',
    title = 'Контакти та оранжерея',
    description = '',
    phone,
    email,
    address,
    workingHours,
  } = block

  return `
    <section class="contacts" id="${anchor}">
      <div class="contacts__card">
        <div class="contacts__info">
          ${badge ? `<div class="section-badge">${badge}</div>` : ''}
          <h2 class="section-title">${title}</h2>
          ${description ? `<p class="contacts__description">${description}</p>` : ''}

          <div class="contacts__items">
            <div class="contact-item">
              <span class="contact-item__icon">📍</span>
              <div>
                <div class="contact-item__label">Адреса оранжереї:</div>
                <div class="contact-item__value">${address}</div>
              </div>
            </div>

            <div class="contact-item">
              <span class="contact-item__icon">📞</span>
              <div>
                <div class="contact-item__label">Телефон флориста:</div>
                <a class="contact-item__value contact-item__link" href="tel:${phone.replace(/\s+/g, '')}">${phone}</a>
              </div>
            </div>

            <div class="contact-item">
              <span class="contact-item__icon">✉️</span>
              <div>
                <div class="contact-item__label">Email для запитань:</div>
                <a class="contact-item__value contact-item__link" href="mailto:${email}">${email}</a>
              </div>
            </div>

            <div class="contact-item">
              <span class="contact-item__icon">🕒</span>
              <div>
                <div class="contact-item__label">Години роботи:</div>
                <div class="contact-item__value">${workingHours}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="contacts__highlight">
          <div class="highlight-box">
            <span class="highlight-box__emoji">💐</span>
            <h3 class="highlight-box__title">Потрібна консультація?</h3>
            <p class="highlight-box__text">
              Завітайте особисто або напишіть нам, і ми допоможемо обрати найкращий букет для вашої події!
            </p>
            <a href="tel:${phone.replace(/\s+/g, '')}" class="btn btn--primary" style="width: 100%;">
              Зателефонувати флористу
            </a>
          </div>
        </div>
      </div>
    </section>
  `
}
