
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
│       │   └── footer.ts      # Підвал сайту з авторством 
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


### Запуск клієнтської частини (Frontend):
```bash
cd frontend
npm install
npm run dev
```
Відкрийте `http://localhost:5173` у браузері.
