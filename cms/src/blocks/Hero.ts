import type { Block } from 'payload'

export const Hero: Block = {
  slug: 'hero',
  labels: { singular: 'Головний екран (Hero)', plural: 'Головні екрани (Hero)' },
  fields: [
    { name: 'anchor', type: 'text', label: 'ID секції (якір)', defaultValue: 'hero' },
    { name: 'badge', type: 'text', label: 'Бейдж (наприклад: 🌸 Довідник Флориста)', defaultValue: '🌸 Довідник Флориста' },
    { name: 'title', type: 'text', label: 'Головний заголовок', required: true },
    { name: 'subtitle', type: 'textarea', label: 'Підзаголовок / Короткий опис' },
    { name: 'image', type: 'upload', relationTo: 'media', label: 'Фонове або головне фото' },
    {
      name: 'buttons',
      type: 'array',
      label: 'Кнопки дій',
      maxRows: 2,
      fields: [
        { name: 'text', type: 'text', label: 'Текст кнопки', required: true },
        { name: 'link', type: 'text', label: 'Посилання кнопки', required: true },
        {
          name: 'variant',
          type: 'select',
          label: 'Стиль кнопки',
          defaultValue: 'primary',
          options: [
            { label: 'Основна (рожева)', value: 'primary' },
            { label: 'Контурна / Додаткова', value: 'secondary' },
          ],
        },
      ],
    },
  ],
}
