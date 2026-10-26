import type { Block } from 'payload'

export const Catalog: Block = {
  slug: 'catalog',
  labels: { singular: 'Каталог квітів', plural: 'Каталоги квітів' },
  fields: [
    { name: 'anchor', type: 'text', label: 'ID секції', defaultValue: 'catalog' },
    { name: 'badge', type: 'text', label: 'Бейдж секції', defaultValue: '🌺 Каталог рослин' },
    { name: 'title', type: 'text', label: 'Заголовок секції', required: true, defaultValue: 'Квіти та рослини у чотирьох категоріях' },
    { name: 'subtitle', type: 'textarea', label: 'Опис секції', defaultValue: 'Зрізані квіти для букетів, кімнатні рослини для дому, витончені сухоцвіти та екзотичні дивовижі.' },
    {
      name: 'items',
      type: 'array',
      label: 'Рослини в каталозі',
      minRows: 1,
      fields: [
        { name: 'name', type: 'text', label: 'Назва рослини', required: true },
        { name: 'latinName', type: 'text', label: 'Латинська назва' },
        {
          name: 'category',
          type: 'select',
          label: 'Категорія',
          defaultValue: 'cut',
          options: [
            { label: 'Зрізані квіти', value: 'cut' },
            { label: 'Кімнатні рослини', value: 'houseplant' },
            { label: 'Сухоцвіти', value: 'dried' },
            { label: 'Екзотичні квіти', value: 'exotic' },
          ],
        },
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
        { name: 'vaseLife', type: 'text', label: 'Стійкість / Період цвітіння', required: true },
        { name: 'season', type: 'text', label: 'Сезон', defaultValue: 'Цілорічно' },
        { name: 'description', type: 'textarea', label: 'Опис та особливості', required: true },
        { name: 'image', type: 'upload', relationTo: 'media', label: 'Фото квітки' },
        { name: 'imageUrl', type: 'text', label: 'Або пряме посилання на фото (URL)' },
      ],
    },
  ],
}
