# 🌸 Довідник Флориста (Florist Guide)
> **Звіт з виробничої практики. Розділ 2: Розробка Fullstack-застосунку на Payload CMS та TypeScript**  
> **Виконавці:** Гусаров, Юрчишин (Студенти 2-го курсу ІТ-спеціальності)  
> **Технологічний стек:** Node.js, Payload CMS 3, Next.js, TypeScript, PostgreSQL (Neon), Vite, CSS3 (ніжно-рожева естетична палітра).

---

## 📖 1. Загальний опис проєкту

**«Довідник Флориста» (Florist Guide)** — це сучасний вебзастосунок (landing page), розроблений як структурований довідковий ресурс для поціновувачів квітів, садівників та флористів-початківців. Додаток містить розширений каталог рослин у чотирьох ключових категоріях:

1. **Зрізані квіти** (Троянда, Тюльпан, Соняшник, Гербера, Лілія, Ірис);
2. **Кімнатні рослини** (Орхідея Фаленопсис, Монстера, Алое вера, Заміокулькас, Антуріум, Спатіфілум);
3. **Сухоцвіти** (Лаванда, Евкаліпт, Гіпсофіла, Целозія, Геліхризум, Амарант);
4. **Екзотичні квіти** (Стреліція, Пасифлора, Плюмерія, Гібіскус, Орхідея Ванда, Геліконія).

Кожна рослина містить фото, українську та латинську назву, рівень складності догляду (легкий / середній / вибаглива), термін стійкості у воді чи цвітіння, сезонність та практичний опис.

Замість форми майстерні реалізовано пізнавальний блок **«Сезонний довідник флориста» (квітковий календар)** з рекомендаціями квітів та порадами для кожної пори року.

Дизайн виконано в естетичній **ніжно-рожевій палітрі** (`#fff8f9`, `#fce7eb`, `#e06d88`, `#3d232c`) із витонченими шрифтами (*Cormorant Garamond*, *Plus Jakarta Sans*), легкими тінями та інтерактивними вкладками фільтрації за категоріями.

---

## 🗂️ 2. Структура монорепозиторію

```text
zvit_js_ts/
├── package.json               # Загальний конфіг монорепозиторію та npm-скрипти
├── .gitignore                 # Правила ігнорування (node_modules, .env, dist)
├── README.md                  # Документація та інструкція до звіту
│
├── cms/                       # 🛠️ Бекенд: Payload CMS 3 (Next.js 15 + Neon DB)
│   ├── src/
│   │   ├── payload.config.ts  # Головна конфігурація Payload (DB, CORS, Endpoints)
│   │   ├── endpoints.ts       # Кастомні плоскі API ендпоінти (/api/common, /api/page)
│   │   ├── collections/       # Колекції CMS (Pages, Users, Media)
│   │   ├── globals/           # Глобальні сутності (Common - шапка, меню, футер)
│   │   └── blocks/            # Блоки конструктора сторінки:
│   │       ├── Hero.ts        # Головний екран
│   │       ├── Catalog.ts     # Каталог 4 категорій рослин (cut, houseplant, dried, exotic)
│   │       ├── Features.ts    # Правила продовження свіжості букета
│   │       ├── Tips.ts        # Секрети та лайфхаки флористів
│   │       └── Seasonal.ts    # Сезонний довідник рослин (квітковий календар)
│   ├── .env.example           # Зразок змінних середовища для підключення Neon
│   └── package.json           # Залежності Payload CMS (@payloadcms/db-postgres тощо)
│
├── frontend/                  # 🌸 Клієнтська частина: Vite + TypeScript
│   ├── index.html             # HTML-шаблон з підключенням шрифтів
│   ├── tsconfig.json          # Конфігурація компілятора TypeScript
│   ├── package.json           # Скрипти збірки (vite build) та перевірки типів
│   └── src/
│       ├── main.ts            # Точка входу, життєвий цикл, обробка станів UI, фільтрація табів
│       ├── api.ts             # Типізовані асинхронні запити (getJson<T>)
│       ├── render.ts          # Модульний шаблонізатор блоків
│       ├── types/
│       │   └── index.ts       # Type Aliases, Union, Intersection Types (Вимога 2.3)
│       ├── data/
│       │   └── mockData.ts    # Офлайн-дані 24 рослин та блоків для демонстрації
│       ├── layout/
│       │   ├── header.ts      # Ніжно-рожева шапка з логотипом Florist Guide
│       │   └── footer.ts      # Підвал сайту з авторством (Гусаров, Юрчишин)
│       ├── blocks/            # Шаблони та CSS стилі кожного блоку:
│       │   ├── hero/          # hero.ts, hero.css
│       │   ├── catalog/       # catalog.ts, catalog.css (із вкладками категорій)
│       │   ├── features/      # features.ts, features.css
│       │   ├── tips/          # tips.ts, tips.css
│       │   └── seasonal/      # seasonal.ts, seasonal.css (квітковий календар)
│       └── styles/
│           └── base.css       # Ніжно-рожева мінімалістична дизайн-система
│
└── backend/                   # 🚀 Локальний Mock Express сервер (для автономного тестування)
    ├── server.js              # Express API (/api/common, /api/page)
    └── data/                  # JSON-дані з 24 квітами та сезонним календарем
```

---

## 📑 3. Відповідність підрозділам Звіту з практики

### 2.1. Архітектура та Payload CMS
- **Монорепозиторій:** поділ на `cms` та `frontend` з незалежними залежностями у відповідних `package.json`.
- **Конфігурація Payload:** файл `cms/src/payload.config.ts` налаштовує підключення `@payloadcms/db-postgres` до бази даних **Neon** через пул підключень (`connection pooling`).
- **Колекції та Блоки:** сутності `Pages`, `Media`, `Users`, глобал `Common`, а також блоки `Hero`, `Catalog` (із випадаючим списком категорій), `Features`, `Tips`, `Seasonal`.
- **Кастомні API-ендпоінти (`cms/src/endpoints.ts`):**
  - `GET /api/common` — повертає назву `Florist Guide`, меню навігації та футер;
  - `GET /api/page?path=/` — знаходить сторінку в колекції `Pages`, очищає вкладені дані функцією `blockCleaner` та віддає чистий JSON.

### 2.2. Клієнтська частина та стани UI
- **Асинхронні запити:** виконання паралельних запитів за допомогою `Promise.all([getSettings(), getPage('/')])`.
- **Шаблонізація:** функція `renderBlocks(page.blocks)` динамічно викликає відповідний рендерер (`hero`, `catalog`, `features`, `tips`, `seasonal`).
- **Обробка трьох станів UI:**
  1. `Loading` — витончений рожевий спінер із повідомленням про завантаження;
  2. `Error` — картка з описом помилки, кнопкою «🔄 Спробувати знову» та кнопкою переходу в демо-режим;
  3. `Success` — повний рендер лендінгу з інтерактивними вкладками категорій (Всі / Зрізані / Кімнатні / Сухоцвіти / Екзотичні).

### 2.3. Типізація на TypeScript (`frontend/src/types/index.ts`)
- **Type Aliases:**
  ```typescript
  export type FlowerCareLevel = 'easy' | 'medium' | 'hard';
  export type FlowerCategory = 'cut' | 'houseplant' | 'dried' | 'exotic';
  export type BlockType = 'hero' | 'catalog' | 'features' | 'tips' | 'seasonal';
  export type UIState = 'loading' | 'error' | 'success';
  ```
- **Union Types:**
  ```typescript
  export type PageBlock = HeroBlock | CatalogBlock | FeaturesBlock | TipsBlock | SeasonalBlock;
  export type UIStatePayload = 
    | { state: 'loading'; message?: string }
    | { state: 'error'; message: string; canRetry: boolean }
    | { state: 'success'; data: LandingPageData };
  ```
- **Intersection Types (`&`):**
  ```typescript
  export type BaseBlock = { anchor?: string; badge?: string; title?: string };
  export type BlockWithSubtitle = BaseBlock & { subtitle?: string };
  export type HeroBlock = BlockWithSubtitle & { type: 'hero'; buttons: ActionButton[] };
  export type LandingPageData = { settings: CommonSettings; page: PageResponse } & FetchedMetadata;
  ```

### 2.4. Деплой та контрольний приклад
- **Хмарна база Neon:** проєкт PostgreSQL, pooled connection string.
- **Хостинг Vercel:** імпорт репозиторію з GitHub, Root Directory (`cms` або `frontend`), налаштування змінних оточення `DATABASE_URL` та `PAYLOAD_SECRET`.
- **Контрольний приклад у застосунку:**
  - У правому нижньому кутку клієнтської частини додано панель студента:
    - Кнопка **«⚠️ Скрін помилки»** — імітує мережевий збій для скріншоту у звіт;
    - Кнопка **«⏳ Скрін завантаження»** — фіксує стан спінера завантаження.

---

## 🚀 4. Швидкий запуск

### Запуск клієнтської частини (Frontend):
```bash
cd frontend
npm install
npm run dev
```
Відкрийте `http://localhost:5173` у браузері.
