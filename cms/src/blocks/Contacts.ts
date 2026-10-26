import type { Block } from 'payload'

export const Contacts: Block = {
  slug: 'contacts',
  labels: { singular: 'Контакти (Contacts)', plural: 'Контакти (Contacts)' },
  fields: [
    { name: 'anchor', type: 'text', label: 'ID секції', defaultValue: 'contacts' },
    { name: 'badge', type: 'text', label: 'Бейдж', defaultValue: 'Звʼязок з нами' },
    { name: 'title', type: 'text', label: 'Заголовок секції', required: true, defaultValue: 'Квіткова оранжерея та контакти' },
    { name: 'description', type: 'textarea', label: 'Опис / Запрошення', defaultValue: 'Завітайте до нашого флористичного простору або звʼяжіться з нами для консультації щодо догляду за квітами.' },
    { name: 'phone', type: 'text', label: 'Номер телефону', defaultValue: '+380 (67) 555-24-11' },
    { name: 'email', type: 'text', label: 'Email адреса', defaultValue: 'flora.guide@florist.ua' },
    { name: 'address', type: 'text', label: 'Адреса оранжереї', defaultValue: 'м. Львів, вул. Квіткова, 7' },
    { name: 'workingHours', type: 'text', label: 'Графік роботи', defaultValue: 'Щодня з 09:00 до 20:00' },
  ],
}
