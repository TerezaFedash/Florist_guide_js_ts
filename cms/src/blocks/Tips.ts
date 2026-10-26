import type { Block } from 'payload'

export const Tips: Block = {
  slug: 'tips',
  labels: { singular: 'Секрети флориста (Tips)', plural: 'Секрети флориста (Tips)' },
  fields: [
    { name: 'anchor', type: 'text', label: 'ID секції', defaultValue: 'tips' },
    { name: 'badge', type: 'text', label: 'Бейдж', defaultValue: 'Професійні поради' },
    { name: 'title', type: 'text', label: 'Заголовок секції', required: true, defaultValue: 'Секрети від флористів' },
    {
      name: 'cards',
      type: 'array',
      label: 'Картки з порадами',
      fields: [
        { name: 'tag', type: 'text', label: 'Тег (напр: Лайфхак, Важливо, Сезон)', defaultValue: 'Лайфхак' },
        { name: 'title', type: 'text', label: 'Заголовок поради', required: true },
        { name: 'content', type: 'textarea', label: 'Зміст поради', required: true },
      ],
    },
  ],
}
