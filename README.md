# 🌸 Довідник Флориста (FloraGuide)
> **Звіт з виробничої практики. Розділ 2: Розробка Fullstack-застосунку на Payload CMS та TypeScript**  
> **Виконавці:** Гусаров, Юрчишин (Студенти 2-го курсу ІТ-спеціальності)  
> **Технологічний стек:** Node.js, Payload CMS 3, Next.js, TypeScript, PostgreSQL (Neon), Vite, CSS3 (ніжно-рожева палітра).

---

## 📖 1. Загальний опис проєкту

**«Довідник Флориста» (FloraGuide)** — це вебзастосунок (landing page), створений як практичний довідник для поціновувачів квітів та флористів-початківців. Додаток розповідає про популярні квіти для букетів (півонії, троянди, гортензії, еустоми, тюльпани, ранункулюси), терміни їх стійкості у вазі, складність догляду та професійні лайфхаки щодо збереження свіжості зрізаних квітів.

Дизайн виконано в елегантній **ніжно-рожевій палітрі** (`#fff8f9`, `#fce7eb`, `#e06d88`, `#3d232c`) із витонченою типографікою, адаптивною сіткою та плавною анімацією.

---

## 🗂️ 2. Структура монорепозиторію

Проєкт організовано у вигляді монорепозиторію, де ізольовано бекенд-систему керування вмістом та клієнтський додаток:

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
│   │       ├── Hero.ts        # Головний банер
│   │       ├── Catalog.ts     # Каталог квітів зі складністю догляду
│   │       ├── Features.ts    # Правила продовження свіжості
│   │       ├── Tips.ts        # Секрети та лайфхаки флористів
│   │       └── Contacts.ts    # Контакти та оранжерея
│   ├── .env.example           # Зразок змінних середовища для підключення Neon
│   └── package.json           # Залежності Payload CMS (@payloadcms/db-postgres тощо)
│
├── frontend/                  # 🌸 Клієнтська частина: Vite + TypeScript
│   ├── index.html             # HTML-шаблон з підключенням шрифтів
│   ├── tsconfig.json          # Конфігурація компілятора TypeScript
│   ├── package.json           # Скрипти збірки (vite build) та типізації
│   └── src/
│       ├── main.ts            # Точка входу, життєвий цикл, обробка станів UI
│       ├── api.ts             # Типізовані асинхронні запити (getJson<T>)
│       ├── render.ts          # Модульний шаблонізатор блоків
│       ├── types/
│       │   └── index.ts       # Type Aliases, Union, Intersection Types
│       ├── data/
│       │   └── mockData.ts    # Офлайн-дані для демонстрації та відмовостійкості
│       ├── layout/
│       │   ├── header.ts      # Шапка сайту з рожевим акцентом та логотипом
│       │   └── footer.ts      # Підвал сайту з авторством Гусаров, Юрчишин
│       ├── blocks/            # Шаблони та CSS стилі для кожного блоку:
│       │   ├── hero/          # hero.ts, hero.css
│       │   ├── catalog/       # catalog.ts, catalog.css (з клієнтськими фільтрами)
│       │   ├── features/      # features.ts, features.css
│       │   ├── tips/          # tips.ts, tips.css
│       │   └── contacts/      # contacts.ts, contacts.css
│       └── styles/
│           └── base.css       # Ніжно-рожева дизайн-система, змінні, спінери
│
└── backend/                   # 🚀 Локальний Mock Express сервер (для швидкого запуску)
    ├── server.js              # Express API (/api/common, /api/page)
    └── data/                  # Навчальні JSON-файли floristry
```

---

## 📑 3. Відповідність підрозділам Звіту з практики

### 2.1. Архітектура та Payload CMS
- **Монорепозиторій:** поділ на `cms` та `frontend` з незалежними залежностями у відповідних `package.json`.
- **Конфігурація Payload:** файл `cms/src/payload.config.ts` налаштовує підключення `@payloadcms/db-postgres` до бази даних **Neon**, плагін Vercel Blob для збереження медіа та реєстрацію колекцій.
- **Колекції та Блоки:** створено сутності `Pages` (динамічний конструктор сторінок на блоках), `Media`, `Users`, глобал `Common`, а також блоки `Hero`, `Catalog`, `Features`, `Tips`, `Contacts`.
- **Кастомні API-ендпоінти (`cms/src/endpoints.ts`):**
  - `GET /api/common` — повертає назву сайту, пункти навігаційного меню та футер;
  - `GET /api/page?path=/` — знаходить сторінку в колекції `Pages`, очищає вкладені дані функцією `blockCleaner` та повертає плоский, зрозумілий для фронтенду JSON.

### 2.2. Клієнтська частина та стани UI
- **Асинхронні запити:** виконання паралельних запитів за допомогою `Promise.all([getSettings(), getPage('/')])`.
- **Шаблонізація:** функція `renderBlocks(page.blocks)` динамічно знаходить відповідний рендерер за полем `block.type`.
- **Обробка трьох станів UI:**
  1. `Loading` (Завантаження) — показ витонченого рожевого спінера та повідомлення про очікування даних;
  2. `Error` (Помилка) — інформативна картка з поясненням збою, кнопкою «Спробувати знову» (Retry) та можливістю увімкнути демо-режим;
  3. `Ready / Success` (Готовність) — повне відображення структури сайту, інтерактивні фільтри каталогу рослин за складністю догляду.
- **Адаптивна верстка:** Grid та Flexbox макети, які коректно відображаються на смартфонах, планшетах і десктопах.

### 2.3. Типізація на TypeScript (`frontend/src/types/index.ts`)
- **Type Aliases (Псевдоніми типів):**
  - `type FlowerCareLevel = 'easy' | 'medium' | 'hard';`
  - `type ButtonVariant = 'primary' | 'secondary' | 'outline';`
  - `type BlockType = 'hero' | 'catalog' | 'features' | 'tips' | 'contacts';`
  - `type UIState = 'loading' | 'error' | 'success';`
- **Union Types (Типи об'єднання):**
  - `type PageBlock = HeroBlock | CatalogBlock | FeaturesBlock | TipsBlock | ContactsBlock;`
  - `type UIStatePayload = { state: 'loading' } | { state: 'error'; message: string; canRetry: boolean } | { state: 'success'; data: LandingPageData };`
- **Intersection Types (Типи перетину через `&`):**
  - `type BaseBlock = { anchor?: string; badge?: string; title?: string };`
  - `type BlockWithSubtitle = BaseBlock & { subtitle?: string };`
  - `type HeroBlock = BlockWithSubtitle & { type: 'hero'; buttons: ActionButton[] };`
  - `type LandingPageData = { settings: CommonSettings; page: PageResponse } & FetchedMetadata;`
- **Типізація функцій та API:**
  - `async function getJson<T>(endpoint: string): Promise<T>` — використання дженериків;
  - `BlockRenderersMap` — сувора типізація об'єкта функцій-шаблонізаторів.

### 2.4. Деплой та контрольний приклад
- **Хмарна база Neon:** створення проєкту PostgreSQL, увімкнення `Connection pooling`, отримання pooled connection string.
- **Хостинг Vercel:** імпорт репозиторію з GitHub, визначення Root Directory (`cms` або `frontend`), встановлення змінних середовища `DATABASE_URL` та `PAYLOAD_SECRET`.
- **Контрольний приклад у застосунку:**
  - У правому нижньому кутку клієнтської частини додано панель студента:
    - Кнопка **«⚠️ Скрін помилки»** — імітує мережевий збій або недоступність БД для легкого зняття скріншоту у звіт;
    - Кнопка **«⏳ Скрін завантаження»** — фіксує стан спінера завантаження.

---

## 🚀 4. Інструкція із запуску проєкту

### Варіант А: Швидкий запуск клієнтської частини (Frontend)
```bash
# Перехід у папку фронтенду
cd frontend

# Встановлення залежностей (Vite, TypeScript)
npm install

# Запуск локального dev-сервера
npm run dev
```
Після запуску відкрийте браузер за адресою `http://localhost:5173`. Фронтенд автоматично відобразить довідник флориста!

### Варіант Б: Запуск разом із локальним Mock API сервером
```bash
# У першому терміналі: запуск бекенду на http://localhost:3000
cd backend
npm install
npm run dev

# У другому терміналі: запуск фронтенду на http://localhost:5173
cd frontend
npm run dev
```

### Варіант В: Запуск повноцінної Payload CMS 3
1. Створіть файл `cms/.env` на основі `cms/.env.example`:
   ```env
   DATABASE_URL="postgresql://neondb_owner:PASSWORD@ep-sample-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require"
   PAYLOAD_SECRET="9f8e7d6c5b4a3210..."
   FRONTEND_URL="http://localhost:5173"
   CMS_URL="http://localhost:3000"
   ```
2. Встановіть пакети та запустіть CMS:
   ```bash
   cd cms
   npm install
   npm run dev
   ```
3. Відкрийте адмін-панель за адресою: `http://localhost:3000/admin`. Створіть першого користувача та наповнюйте сторінки у візуальному конструкторі блоків.
