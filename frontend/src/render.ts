import type { PageBlock, BlockRenderersMap } from './types'
import { hero } from './blocks/hero/hero'
import { catalog } from './blocks/catalog/catalog'
import { features } from './blocks/features/features'
import { tips } from './blocks/tips/tips'
import { seasonal } from './blocks/seasonal/seasonal'

/**
 * Словник шаблонізаторів, суворо типізований через BlockRenderersMap
 */
const renderers: BlockRenderersMap = {
  hero,
  catalog,
  features,
  tips,
  seasonal,
}

/**
 * Динамічний рендер масиву блоків відповідно до їх властивості 'type'
 * Звужує типи та викликає відповідний шаблон
 */
export function renderBlocks(blocks: PageBlock[]): string {
  if (!blocks || !Array.isArray(blocks)) {
    return ''
  }

  return blocks
    .map((block) => {
      const render = renderers[block.type] as ((b: PageBlock) => string) | undefined

      if (!render) {
        console.warn(`[Florist Guide] Шаблон для блоку типу "${block.type}" не знайдено.`)
        return ''
      }

      try {
        return render(block)
      } catch (err) {
        console.error(`Помилка рендеру блоку "${block.type}":`, err)
        return `<!-- Помилка рендеру блоку ${block.type} -->`
      }
    })
    .join('\n')
}
