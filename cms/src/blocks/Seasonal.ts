import type { Block } from 'payload'

export const Seasonal: Block = {
  slug: 'seasonal',
  labels: { singular: 'Сезонний календар (Seasonal)', plural: 'Сезонні календарі (Seasonal)' },
  fields: [
    { name: 'anchor', type: 'text', label: 'ID секції', defaultValue: 'seasonal' },
    { name: 'badge', type: 'text', label: 'Бейдж', defaultValue: '📅 Квітковий календар' },
    { name: 'title', type: 'text', label: 'Заголовок секції', required: true, defaultValue: 'Сезонний довідник рослин' },
    { name: 'subtitle', type: 'textarea', label: 'Підзаголовок', defaultValue: 'Дізнайтеся, коли які квіти цвітуть та як обрати найкращі сезонні рослини.' },
    {
      name: 'seasons',
      type: 'array',
      label: 'Пори року',
      fields: [
        { name: 'season', type: 'text', label: 'Пора року (напр. Весна)', required: true },
        { name: 'emoji', type: 'text', label: 'Емодзі (напр. 🌷)', required: true },
        { name: 'months', type: 'text', label: 'Місяці (напр. Березень — Травень)', required: true },
        {
          name: 'flowers',
          type: 'array',
          label: 'Рекомендовані квіти',
          fields: [{ name: 'name', type: 'text', required: true }],
        },
        { name: 'tip', type: 'textarea', label: 'Порада сезону', required: true },
      ],
    },
  ],
}
