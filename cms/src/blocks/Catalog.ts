import type { Block } from 'payload'

export const Catalog: Block = {
  slug: 'catalog',
  labels: { singular: 'Каталог квітів', plural: 'Каталоги квітів' },
  fields: [
    { name: 'anchor', type: 'text', label: 'ID секції', defaultValue: 'catalog' },
    { name: 'badge', type: 'text', label: 'Бейдж секції', defaultValue: 'Колекція рослин' },
    { name: 'title', type: 'text', label: 'Заголовок секції', required: true, defaultValue: 'Популярні квіти та їх особливості' },
    { name: 'subtitle', type: 'textarea', label: 'Опис секції', defaultValue: 'Коротка інформація про улюблені квіти, їх стійкість у вазі та рекомендації щодо догляду.' },
    {
      name: 'items',
      type: 'array',
      label: 'Квіти в каталозі',
      minRows: 1,
      fields: [
        { name: 'name', type: 'text', label: 'Назва квітки (українською)', required: true },
        { name: 'latinName', type: 'text', label: 'Латинська назва' },
        {
          name: 'careLevel',
          type: 'select',
          label: 'Складність догляду',
          defaultValue: 'easy',
          options: [
            { label: 'Легкий (невибаглива)', value: 'easy' },
            { label: 'Середній (потребує уваги)', value: 'medium' },
            { label: 'Вибагливий (особливий догляд)', value: 'hard' },
          ],
        },
        { name: 'vaseLife', type: 'text', label: 'Стійкість у воді (наприклад: 7-10 днів)', required: true },
        { name: 'season', type: 'text', label: 'Сезон цвітіння', defaultValue: 'Весна - Літо' },
        { name: 'description', type: 'textarea', label: 'Опис та особливості', required: true },
        { name: 'image', type: 'upload', relationTo: 'media', label: 'Фото квітки' },
        { name: 'imageUrl', type: 'text', label: 'Або пряме посилання на фото (URL)' },
      ],
    },
  ],
}
