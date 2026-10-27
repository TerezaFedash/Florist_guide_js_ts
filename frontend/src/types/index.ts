export type FlowerCareLevel = 'easy' | 'medium' | 'hard'
export type FlowerCategory = 'cut' | 'houseplant' | 'dried' | 'exotic'
export type ButtonVariant = 'primary' | 'secondary' | 'outline'
export type BlockType = 'hero' | 'catalog' | 'features' | 'tips' | 'seasonal'
export type UIState = 'loading' | 'error' | 'success'
export type FlowerFilter = 'all' | FlowerCategory

export type ImageResource = {
  src: string
  alt: string
}

export type MenuItem = {
  label: string
  link: string
}

export type BaseBlock = {
  anchor?: string
  badge?: string
  title?: string
}

export type BlockWithSubtitle = BaseBlock & {
  subtitle?: string
}

export type ActionButton = {
  text: string
  link: string
  variant: ButtonVariant
}

export type FlowerCard = {
  id?: string
  name: string
  latinName?: string
  careLevel: FlowerCareLevel
  category: FlowerCategory
  vaseLife: string
  season?: string
  description: string
  image?: ImageResource
}

export type CareRuleItem = {
  icon: string
  title: string
  text: string
}

export type TipCard = {
  tag: string
  title: string
  content: string
}

export type SeasonMonth = {
  season: string
  emoji: string
  months: string
  flowers: string[]
  tip: string
}

export type HeroBlock = BlockWithSubtitle & {
  type: 'hero'
  image?: ImageResource
  buttons: ActionButton[]
}

export type CatalogBlock = BlockWithSubtitle & {
  type: 'catalog'
  items: FlowerCard[]
}

export type FeaturesBlock = BlockWithSubtitle & {
  type: 'features'
  items: CareRuleItem[]
}

export type TipsBlock = BaseBlock & {
  type: 'tips'
  cards: TipCard[]
}

export type SeasonalBlock = BlockWithSubtitle & {
  type: 'seasonal'
  seasons: SeasonMonth[]
}

export type FetchedMetadata = {
  fetchedAt: number
  source: 'api' | 'fallback'
}

export type PageBlock =
  | HeroBlock
  | CatalogBlock
  | FeaturesBlock
  | TipsBlock
  | SeasonalBlock

export type ApiResponse<T> =
  | { success: true; data: T }
  | { success: false; error: string; statusCode?: number }

export type UIStatePayload =
  | { state: 'loading'; message?: string }
  | { state: 'error'; message: string; errorDetails?: string; canRetry: boolean }
  | { state: 'success'; data: LandingPageData }

export type CommonSettings = {
  siteName: string
  tagline?: string
  menu: MenuItem[]
  footer: {
    text: string
    author?: string
  }
}

export type PageResponse = {
  path: string
  title: string
  blocks: PageBlock[]
}

export type LandingPageData = {
  settings: CommonSettings
  page: PageResponse
} & FetchedMetadata

export type BlockRenderer<T extends PageBlock> = (block: T) => string

export type BlockRenderersMap = {
  hero: BlockRenderer<HeroBlock>
  catalog: BlockRenderer<CatalogBlock>
  features: BlockRenderer<FeaturesBlock>
  tips: BlockRenderer<TipsBlock>
  seasonal: BlockRenderer<SeasonalBlock>
}
