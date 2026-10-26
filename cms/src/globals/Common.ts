import type { GlobalConfig } from 'payload'

export const Common: GlobalConfig = {
  slug: 'common',
  access: { read: () => true },
  label: 'Загальні налаштування сайту',
  fields: [
    {
      name: 'siteName',
      type: 'text',
      label: 'Назва сайту',
      required: true,
      defaultValue: 'ФлораГід',
    },
    {
      name: 'tagline',
      type: 'text',
      label: 'Коротке гасло (під назвою)',
      defaultValue: 'Довідник Флориста',
    },
    {
      name: 'menu',
      type: 'array',
      label: 'Головне меню навігації',
      fields: [
        { name: 'label', type: 'text', label: 'Текст пункту', required: true },
        { name: 'link', type: 'text', label: 'Посилання (якір або URL)', required: true },
      ],
    },
    {
      name: 'footer',
      type: 'group',
      label: 'Налаштування футера',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Текст у футері',
          defaultValue: 'Практичний довідник флориста: надихаємо на красу та вчимо дбати про живі квіти щодня.',
        },
        {
          name: 'author',
          type: 'text',
          label: 'Автор / Студент',
          defaultValue: 'Гусаров, Юрчишин',
        },
      ],
    },
  ],
}
