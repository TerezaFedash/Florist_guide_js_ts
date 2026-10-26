import type { CollectionConfig } from 'payload'
import { Hero } from '../blocks/Hero'
import { Catalog } from '../blocks/Catalog'
import { Features } from '../blocks/Features'
import { Tips } from '../blocks/Tips'
import { Contacts } from '../blocks/Contacts'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: { plural: 'Сторінки', singular: 'Сторінка' },
  admin: { useAsTitle: 'title' },
  access: { read: () => true },
  fields: [
    {
      name: 'path',
      type: 'text',
      label: 'Адреса сторінки (URL path)',
      required: true,
      unique: true,
      defaultValue: '/',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Назва сторінки',
      required: true,
      defaultValue: 'Довідник Флориста',
    },
    {
      name: 'blocks',
      type: 'blocks',
      label: 'Блоки конструктора сторінки',
      blocks: [Hero, Catalog, Features, Tips, Contacts],
    },
  ],
}
