import type { Endpoint, PayloadRequest } from 'payload'

function blockCleaner(block: Record<string, any>) {
  const { id, blockName, blockType, image, items, cards, buttons, seasons, ...rest } = block

  const clean: Record<string, any> = {
    type: blockType,
    ...rest,
  }

  if (image && typeof image === 'object') {
    clean.image = {
      src: image.url || '',
      alt: image.alt || image.filename || 'Зображення',
    }
  } else if (typeof image === 'string') {
    clean.image = { src: image, alt: 'Зображення' }
  }

  if (Array.isArray(items)) {
    clean.items = items.map((item: any) => {
      const cleanItem = { ...item }
      if (item.image && typeof item.image === 'object') {
        cleanItem.image = {
          src: item.image.url || '',
          alt: item.image.alt || item.name || 'Квітка',
        }
      } else if (item.imageUrl) {
        cleanItem.image = {
          src: item.imageUrl,
          alt: item.name || 'Квітка',
        }
      }
      return cleanItem
    })
  }

  if (Array.isArray(cards)) {
    clean.cards = cards.map((c: any) => ({ ...c }))
  }

  if (Array.isArray(buttons)) {
    clean.buttons = buttons.map(({ text, link, variant }: any) => ({
      text,
      link,
      variant: variant || 'primary',
    }))
  }

  if (Array.isArray(seasons)) {
    clean.seasons = seasons.map((s: any) => ({
      ...s,
      flowers: Array.isArray(s.flowers)
        ? s.flowers.map((f: any) => (typeof f === 'string' ? f : f.name || ''))
        : [],
    }))
  }

  return clean
}

export const commonEndpoint: Endpoint = {
  path: '/common',
  method: 'get',
  handler: async (req: PayloadRequest) => {
    try {
      const common = await req.payload.findGlobal({
        slug: 'common',
        depth: 1,
      })

      return Response.json({
        siteName: common.siteName || 'Florist Guide',
        tagline: common.tagline || 'Довідник Флориста',
        menu: (common.menu ?? []).map(({ label, link }: any) => ({ label, link })),
        footer: {
          text: common.footer?.text ?? 'Практичний довідник флориста: ніжні квіти, правильний догляд та натхнення щодня.',
          author: common.footer?.author ?? 'Гусаров, Юрчишин',
        },
      })
    } catch (err: any) {
      return Response.json(
        { error: 'Не вдалося завантажити налаштування сайту', details: err?.message },
        { status: 500 },
      )
    }
  },
}

export const pageEndpoint: Endpoint = {
  path: '/page',
  method: 'get',
  handler: async (req: PayloadRequest) => {
    try {
      const path = req.query?.path || '/'

      const result = await req.payload.find({
        collection: 'pages',
        where: { path: { equals: path } },
        depth: 2,
        limit: 1,
      })

      const page = result.docs[0]

      if (!page) {
        return Response.json({ error: `Сторінку "${path}" не знайдено` }, { status: 404 })
      }

      return Response.json({
        path: page.path,
        title: page.title,
        blocks: (page.blocks ?? []).map(blockCleaner),
      })
    } catch (err: any) {
      return Response.json(
        { error: 'Помилка отримання даних сторінки', details: err?.message },
        { status: 500 },
      )
    }
  },
}
