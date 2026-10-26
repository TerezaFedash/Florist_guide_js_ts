/**
 * =======================================================================
 * РОЗДІЛ 2.3. ТИПІЗАЦІЯ НА TYPESCRIPT ("ДОВІДНИК ФЛОРИСТА")
 * Демонстрація Type Aliases, Union Types, Intersection Types,
 * типізації функцій, об'єктів та даних, отриманих через API.
 * =======================================================================
 */

// -----------------------------------------------------------------------
// 1. TYPE ALIASES (Псевдоніми типів)
// -----------------------------------------------------------------------

/** Рівень складності догляду за квіткою */
export type FlowerCareLevel = 'easy' | 'medium' | 'hard'

/** Варіант стилю оформлення кнопки (рожева головна / контурна) */
export type ButtonVariant = 'primary' | 'secondary' | 'outline'

/** Типи доступних динамічних блоків лендінгу */
export type BlockType = 'hero' | 'catalog' | 'features' | 'tips' | 'contacts'

/** Стан завантаження інтерфейсу користувача */
export type UIState = 'loading' | 'error' | 'success'

/** Фільтр каталогу квітів за рівнем догляду */
export type FlowerFilter = 'all' | FlowerCareLevel

/** Опис ресурсу зображення */
export type ImageResource = {
  src: string
  alt: string
}

/** Пункт навігаційного меню сайту */
export type MenuItem = {
  label: string
  link: string
}

// -----------------------------------------------------------------------
// 2. INTERSECTION TYPES (Типи перетину через &)
// -----------------------------------------------------------------------

/** Базові властивості, спільні для будь-якого блоку */
export type BaseBlock = {
  anchor?: string
  badge?: string
  title?: string
}

/** Розширений базовий блок із обов'язковим або опціональним підзаголовком */
export type BlockWithSubtitle = BaseBlock & {
  subtitle?: string
}

/** Кнопка дії з посиланням та варіантом відображення */
export type ActionButton = {
  text: string
  link: string
  variant: ButtonVariant
}

/** Картка окремої квітки в каталозі */
export type FlowerCard = {
  id?: string
  name: string
  latinName?: string
  careLevel: FlowerCareLevel
  vaseLife: string
  season?: string
  description: string
  image?: ImageResource
}

/** Елемент правила догляду */
export type CareRuleItem = {
  icon: string
  title: string
  text: string
}

/** Картка з порадою або секретом від флориста */
export type TipCard = {
  tag: string
  title: string
  content: string
}

/** Блок "Hero" (головний банер) */
export type HeroBlock = BlockWithSubtitle & {
  type: 'hero'
  image?: ImageResource
  buttons: ActionButton[]
}

/** Блок "Catalog" (каталог квітів з фільтрами) */
export type CatalogBlock = BlockWithSubtitle & {
  type: 'catalog'
  items: FlowerCard[]
}

/** Блок "Features" (основи правильного догляду) */
export type FeaturesBlock = BlockWithSubtitle & {
  type: 'features'
  items: CareRuleItem[]
}

/** Блок "Tips" (секрети та лайфхаки флористів) */
export type TipsBlock = BaseBlock & {
  type: 'tips'
  cards: TipCard[]
}

/** Блок "Contacts" (контакти та оранжерея) */
export type ContactsBlock = BaseBlock & {
  type: 'contacts'
  description?: string
  phone: string
  email: string
  address: string
  workingHours: string
}

/** Метадані сторінки, об'єднані з таймштампом завантаження (Intersection Type) */
export type FetchedMetadata = {
  fetchedAt: number
  source: 'api' | 'fallback'
}

// -----------------------------------------------------------------------
// 3. UNION TYPES (Типи об'єднання через |)
// -----------------------------------------------------------------------

/**
 * Дискриміноване об'єднання (Discriminated Union) усіх можливих блоків
 * Поле `type` слугує дискримінатором для безпечного звуження типу (type narrowing)
 */
export type PageBlock =
  | HeroBlock
  | CatalogBlock
  | FeaturesBlock
  | TipsBlock
  | ContactsBlock

/** Результат виконання API запиту */
export type ApiResponse<T> =
  | { success: true; data: T }
  | { success: false; error: string; statusCode?: number }

/** Стан відтворення UI компонента */
export type UIStatePayload =
  | { state: 'loading'; message?: string }
  | { state: 'error'; message: string; errorDetails?: string; canRetry: boolean }
  | { state: 'success'; data: LandingPageData }

// -----------------------------------------------------------------------
// 4. ТИПІЗАЦІЯ ДАНИХ ТА ОБ'ЄКТІВ З API (Payload CMS / Backend)
// -----------------------------------------------------------------------

/** Загальні налаштування сайту (/api/common) */
export type CommonSettings = {
  siteName: string
  tagline?: string
  menu: MenuItem[]
  footer: {
    text: string
    author?: string
  }
}

/** Відповідь ендпоінту сторінки (/api/page?path=...) */
export type PageResponse = {
  path: string
  title: string
  blocks: PageBlock[]
}

/** Комплексні дані для повного рендеру лендінгу */
export type LandingPageData = {
  settings: CommonSettings
  page: PageResponse
} & FetchedMetadata // Використання Intersection Type

// -----------------------------------------------------------------------
// 5. ТИПІЗАЦІЯ ФУНКЦІЙ ТА ШАБЛОНІЗАТОРІВ (Function Signatures)
// -----------------------------------------------------------------------

/** Сигнатура функції рендерера для конкретного блоку */
export type BlockRenderer<T extends PageBlock> = (block: T) => string

/** Словник шаблонізаторів блоків за їх типом */
export type BlockRenderersMap = {
  hero: BlockRenderer<HeroBlock>
  catalog: BlockRenderer<CatalogBlock>
  features: BlockRenderer<FeaturesBlock>
  tips: BlockRenderer<TipsBlock>
  contacts: BlockRenderer<ContactsBlock>
}
