import type { Block } from 'payload'

export const Features: Block = {
  slug: 'features',
  labels: { singular: 'Основи догляду (Features)', plural: 'Основи догляду (Features)' },
  fields: [
    { name: 'anchor', type: 'text', label: 'ID секції', defaultValue: 'care' },
    { name: 'badge', type: 'text', label: 'Бейдж', defaultValue: 'Базові правила' },
    { name: 'title', type: 'text', label: 'Заголовок секції', required: true, defaultValue: 'Як продовжити життя букета' },
    { name: 'subtitle', type: 'textarea', label: 'Підзаголовок', defaultValue: 'Прості, але критично важливі кроки, які допоможуть квітам залишатися свіжими вдвічі довше.' },
    {
      name: 'items',
      type: 'array',
      label: 'Правила та поради',
      fields: [
        { name: 'icon', type: 'text', label: 'Іконка (емодзі)', required: true },
        { name: 'title', type: 'text', label: 'Назва правила', required: true },
        { name: 'text', type: 'textarea', label: 'Пояснення правила', required: true },
      ],
    },
  ],
}
