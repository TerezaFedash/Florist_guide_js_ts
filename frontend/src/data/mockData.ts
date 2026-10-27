import type { CommonSettings, PageResponse } from '../types'

export const fallbackSettings: CommonSettings = {
  siteName: 'Florist Guide',
  tagline: 'Довідник Флориста',
  menu: [
    { label: 'Головна', link: '#hero' },
    { label: 'Квіти', link: '#catalog' },
    { label: 'Догляд', link: '#care' },
    { label: 'Поради', link: '#tips' },
    { label: 'Сезон', link: '#seasonal' },
  ],
  footer: {
    text: 'Практичний довідник флориста — ніжні квіти, правильний догляд та натхнення щодня.',
    author: 'Гусаров, Юрчишин',
  },
}

export const fallbackPage: PageResponse = {
  path: '/',
  title: 'Florist Guide — Довідник Флориста',
  blocks: [
    {
      type: 'hero',
      anchor: 'hero',
      badge: '🌸 Ваш квітковий довідник',
      title: 'Florist Guide — мистецтво квіткової краси',
      subtitle:
        'Відкрийте світ квіткової флористики: від зрізаних букетів до екзотичних рослин, від кімнатних любимців до витончених сухоцвітів. Все про вибір, догляд та натхнення.',
      image: {
        src: 'https://plus.unsplash.com/premium_photo-1676475964992-6404b8db0b53?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
        alt: 'Ніжні рожеві квіти — Довідник Флориста',
      },
      buttons: [
        { text: 'Переглянути каталог', link: '#catalog', variant: 'primary' },
        { text: 'Поради з догляду', link: '#care', variant: 'secondary' },
      ],
    },
    {
      type: 'catalog',
      anchor: 'catalog',
      badge: '🌺 Каталог рослин',
      title: 'Квіти та рослини у чотирьох категоріях',
      subtitle:
        'Зрізані квіти для букетів, кімнатні рослини для дому, витончені сухоцвіти та екзотичні дивовижі — повний довідник флориста.',
      items: [

        {
          id: 'cut-1',
          name: 'Троянда',
          latinName: 'Rosa odorata',
          careLevel: 'easy',
          category: 'cut',
          vaseLife: '7–14 днів',
          season: 'Цілорічно',
          description:
            'Королева флористики. Потребує глибокої вази, видалення нижнього листя та щоденної заміни свіжої прохолодної води.',
          image: {
            src: 'https://images.unsplash.com/photo-1581938165093-050aeb5ef218?w=900&auto=format&fit=crop&q=60',
            alt: 'Червоні троянди',
          },
        },
        {
          id: 'cut-2',
          name: 'Тюльпан',
          latinName: 'Tulipa gesneriana',
          careLevel: 'easy',
          category: 'cut',
          vaseLife: '5–8 днів',
          season: 'Лютий – Травень',
          description:
            'Провісник весни, який продовжує рости навіть у вазі! Обожнює крижану воду, прямий зріз і прохолодне місце.',
          image: {
            src: 'https://plus.unsplash.com/premium_photo-1676272769520-e0b5af99c509?w=900&auto=format&fit=crop&q=60',
            alt: 'Рожеві тюльпани',
          },
        },
        {
          id: 'cut-3',
          name: 'Соняшник',
          latinName: 'Helianthus annuus',
          careLevel: 'easy',
          category: 'cut',
          vaseLife: '6–10 днів',
          season: 'Липень – Вересень',
          description:
            'Яскрава та позитивна квітка. Потребує чимало води — стебло «пʼє» її дуже активно. Уникайте тіні та протягів.',
          image: {
            src: 'https://images.unsplash.com/photo-1512238701577-f182d9ef8af7?w=900&auto=format&fit=crop&q=60',
            alt: 'Соняшники в полі',
          },
        },
        {
          id: 'cut-4',
          name: 'Гербера',
          latinName: 'Gerbera jamesonii',
          careLevel: 'medium',
          category: 'cut',
          vaseLife: '7–10 днів',
          season: 'Цілорічно',
          description:
            'Яскрава та жовтогаряча «сонячна» квітка. Не переносить занадто глибокого занурення стебла — наливайте 4–5 см води.',
          image: {
            src: 'https://images.unsplash.com/photo-1597583995844-edce63cc1cb0?w=900&auto=format&fit=crop&q=60',
            alt: 'Яскраві гербери',
          },
        },
        {
          id: 'cut-5',
          name: 'Лілія',
          latinName: 'Lilium candidum',
          careLevel: 'medium',
          category: 'cut',
          vaseLife: '10–14 днів',
          season: 'Червень – Серпень',
          description:
            'Благородна та ароматна квітка. Пильця лілії фарбує тканину і шкіру — видаляйте тичинки одразу після розкриття.',
          image: {
            src: 'https://images.unsplash.com/photo-1561897519-6e4fbd1fbc41?w=900&auto=format&fit=crop&q=60',
            alt: 'Біла лілія',
          },
        },
        {
          id: 'cut-6',
          name: 'Ірис',
          latinName: 'Iris germanica',
          careLevel: 'easy',
          category: 'cut',
          vaseLife: '5–7 днів',
          season: 'Квітень – Червень',
          description:
            'Витончена квітка з оксамитовими пелюстками. Розкриває бутони по одному, тому букет «оживає» протягом кількох днів.',
          image: {
            src: 'https://images.unsplash.com/photo-1589312397744-799d9f9c2944?w=900&auto=format&fit=crop&q=60',
            alt: 'Фіолетовий ірис',
          },
        },

        {
          id: 'home-1',
          name: 'Орхідея Фаленопсис',
          latinName: 'Phalaenopsis amabilis',
          careLevel: 'medium',
          category: 'houseplant',
          vaseLife: 'Цвіте 2–3 місяці',
          season: 'Цілорічно',
          description:
            'Найпопулярніша кімнатна орхідея. Поливайте раз на 7–10 днів зануренням горщика у воду. Любить яскраве розсіяне світло.',
          image: {
            src: 'https://images.unsplash.com/photo-1454262041357-5d96f50a2f27?w=900&auto=format&fit=crop&q=60',
            alt: 'Рожева орхідея фаленопсис',
          },
        },
        {
          id: 'home-2',
          name: 'Монстера',
          latinName: 'Monstera deliciosa',
          careLevel: 'easy',
          category: 'houseplant',
          vaseLife: 'Багаторічна рослина',
          season: 'Цілорічно',
          description:
            'Тропічна красуня з характерними дірчастими листками. Невибаглива до поливу, легко переносить тінь та сухе повітря.',
          image: {
            src: 'https://plus.unsplash.com/premium_photo-1663962158789-0ab624c4f17d?w=900&auto=format&fit=crop&q=60',
            alt: 'Листя монстери',
          },
        },
        {
          id: 'home-3',
          name: 'Алое вера',
          latinName: 'Aloe barbadensis miller',
          careLevel: 'easy',
          category: 'houseplant',
          vaseLife: 'Багаторічна рослина',
          season: 'Цілорічно',
          description:
            'Рослина-аптека: гель з листків лікує опіки та роздратування шкіри. Поливайте рідко, дозволяйте ґрунту повністю висихати між поливами.',
          image: {
            src: 'https://images.unsplash.com/photo-1649264722111-5cff15f9d830?w=900&auto=format&fit=crop&q=60',
            alt: 'Алое вера крупним планом',
          },
        },
        {
          id: 'home-4',
          name: 'Заміокулькас',
          latinName: 'Zamioculcas zamiifolia',
          careLevel: 'easy',
          category: 'houseplant',
          vaseLife: 'Багаторічна рослина',
          season: 'Цілорічно',
          description:
            'Ідеальна рослина для зайнятих людей. Накопичує воду в кореневищі, тому витримує тривале забуття поливу та слабке освітлення.',
          image: {
            src: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=900&auto=format&fit=crop&q=60',
            alt: 'Заміокулькас з темно-зеленим листям',
          },
        },
        {
          id: 'home-5',
          name: 'Антуріум',
          latinName: 'Anthurium andraeanum',
          careLevel: 'medium',
          category: 'houseplant',
          vaseLife: 'Цвіте до 3 місяців',
          season: 'Цілорічно',
          description:
            'Яскравий екзот із глянцевими лаковими суцвіттями яскраво-червоного або рожевого кольору. Любить тепло та вологість повітря.',
          image: {
            src: 'https://images.unsplash.com/photo-1594076353236-85d8e500be80?w=900&auto=format&fit=crop&q=60',
            alt: 'Червоний антуріум',
          },
        },
        {
          id: 'home-6',
          name: 'Спатіфілум',
          latinName: 'Spathiphyllum wallisii',
          careLevel: 'easy',
          category: 'houseplant',
          vaseLife: 'Цвіте 1–2 місяці',
          season: 'Весна – Літо',
          description:
            'Один із найпопулярніших домашніх улюбленців. Сам «просигналізує» про спрагу — листя починає злегка обвисати. Очищує повітря.',
          image: {
            src: 'https://plus.unsplash.com/premium_photo-1708769592969-9f42825496a7?w=900&auto=format&fit=crop&q=60',
            alt: 'Білий спатіфілум',
          },
        },

        {
          id: 'dry-1',
          name: 'Лаванда',
          latinName: 'Lavandula angustifolia',
          careLevel: 'easy',
          category: 'dried',
          vaseLife: '1–3 роки сухою',
          season: 'Червень – Серпень',
          description:
            'Ароматна трава-сухоцвіт із фіолетово-синіми суцвіттями. Висушений букет зберігає запах до 2–3 років і відлякує міль.',
          image: {
            src: 'https://images.unsplash.com/photo-1611625105602-42ee06be977e?w=900&auto=format&fit=crop&q=60',
            alt: 'Поле фіолетової лаванди',
          },
        },
        {
          id: 'dry-2',
          name: 'Евкаліпт',
          latinName: 'Eucalyptus cinerea',
          careLevel: 'easy',
          category: 'dried',
          vaseLife: '1–2 роки сухим',
          season: 'Цілорічно',
          description:
            'Ароматне зелене гілля з сіро-блакитним відтінком листків. Незамінний декоративний елемент у сучасних флористичних композиціях.',
          image: {
            src: 'https://plus.unsplash.com/premium_photo-1674248075482-ac8d5f4ea6f6?w=900&auto=format&fit=crop&q=60',
            alt: 'Гілочки евкаліпту',
          },
        },
        {
          id: 'dry-3',
          name: 'Гіпсофіла',
          latinName: 'Gypsophila paniculata',
          careLevel: 'easy',
          category: 'dried',
          vaseLife: '6–12 місяців сухою',
          season: 'Червень – Вересень',
          description:
            'Хмарка ніжних дрібних квіточок — незмінний компаньйон трояндових букетів. Після висушування зберігає форму та декоративність.',
          image: {
            src: 'https://images.unsplash.com/photo-1650805073031-e7991f380253?w=900&auto=format&fit=crop&q=60',
            alt: 'Ніжна біла гіпсофіла',
          },
        },
        {
          id: 'dry-4',
          name: 'Целозія',
          latinName: 'Celosia argentea',
          careLevel: 'easy',
          category: 'dried',
          vaseLife: '6–12 місяців сухою',
          season: 'Серпень – Жовтень',
          description:
            'Незвичайна квітка у формі «петушиного гребня» або ніжних перів. Після висушування зберігає насичений колір від пурпурного до жовтого.',
          image: {
            src: 'https://images.unsplash.com/photo-1745758585657-4bd42031d97e?w=900&auto=format&fit=crop&q=60',
            alt: 'Яскраво-червона целозія',
          },
        },
        {
          id: 'dry-5',
          name: 'Геліхризум',
          latinName: 'Helichrysum bracteatum',
          careLevel: 'easy',
          category: 'dried',
          vaseLife: '1–3 роки сухим',
          season: 'Липень – Жовтень',
          description:
            'Безсмертник або «безсмертна» квітка. Соломʼяні пелюстки зберігають колір і форму роками, звідси й назва "вічна квітка".',
          image: {
            src: 'https://images.unsplash.com/photo-1753109112481-96ae50417867?w=900&auto=format&fit=crop&q=60',
            alt: 'Помаранчевий геліхризум',
          },
        },
        {
          id: 'dry-6',
          name: 'Амарант',
          latinName: 'Amaranthus caudatus',
          careLevel: 'easy',
          category: 'dried',
          vaseLife: '6–12 місяців сухим',
          season: 'Серпень – Жовтень',
          description:
            'Оксамитові ніспадаючі суцвіття темно-малинового кольору. Ефектний акцент у флористичних композиціях в стилі бохо та вінтаж.',
          image: {
            src: 'https://plus.unsplash.com/premium_photo-1663962390305-718957d7e8ac?w=900&auto=format&fit=crop&q=60',
            alt: 'Темно-червоний амарант',
          },
        },

        {
          id: 'exotic-1',
          name: 'Стреліція',
          latinName: 'Strelitzia reginae',
          careLevel: 'medium',
          category: 'exotic',
          vaseLife: '14–21 день',
          season: 'Цілорічно',
          description:
            'Птах раю у світі квітів! Яскрава помаранчево-синя квітка, яка розкривається поступово, тому букет залишається декоративним до трьох тижнів.',
          image: {
            src: 'https://images.unsplash.com/photo-1699043787902-84a29a6a286a?w=900&auto=format&fit=crop&q=60',
            alt: 'Яскрава стреліція',
          },
        },
        {
          id: 'exotic-2',
          name: 'Пасифлора',
          latinName: 'Passiflora incarnata',
          careLevel: 'hard',
          category: 'exotic',
          vaseLife: '3–5 днів зрізаною',
          season: 'Червень – Жовтень',
          description:
            'Квітка-зірка з неймовірно складною архітектурою. Кожна квітка живе лише один день, але рослина безперервно утворює нові бутони.',
          image: {
            src: 'https://images.unsplash.com/photo-1628341423248-4b8c5c51a3cd?w=900&auto=format&fit=crop&q=60',
            alt: 'Екзотична пасифлора',
          },
        },
        {
          id: 'exotic-3',
          name: 'Плюмерія',
          latinName: 'Plumeria rubra',
          careLevel: 'hard',
          category: 'exotic',
          vaseLife: '3–5 днів зрізаною',
          season: 'Травень – Жовтень',
          description:
            'Тропічна красуня з приголомшливим ароматом — саме з неї роблять традиційні гавайські вінки. Пʼє воду через пелюстки, а не стебло.',
          image: {
            src: 'https://images.unsplash.com/photo-1640818938000-cd9ea9c92518?w=900&auto=format&fit=crop&q=60',
            alt: 'Рожево-жовта плюмерія',
          },
        },
        {
          id: 'exotic-4',
          name: 'Гібіскус',
          latinName: 'Hibiscus rosa-sinensis',
          careLevel: 'medium',
          category: 'exotic',
          vaseLife: '1 день (щодня нова квітка)',
          season: 'Травень – Вересень',
          description:
            'Символ тропіків. Кожна квітка живе лише один день, але кущ щодня утворює нові. Чай з гібіскуса — найпопулярніший у Єгипті.',
          image: {
            src: 'https://images.unsplash.com/photo-1567990989224-6441e1483ac8?w=900&auto=format&fit=crop&q=60',
            alt: 'Яскраво-рожевий гібіскус',
          },
        },
        {
          id: 'exotic-5',
          name: 'Орхідея Ванда',
          latinName: 'Vanda coerulea',
          careLevel: 'hard',
          category: 'exotic',
          vaseLife: 'Цвіте 1–2 місяці',
          season: 'Цілорічно',
          description:
            'Одна з найзагадковіших орхідей у флористиці. Вирощується без ґрунту — коріння «дихає» повітрям і поливається зрошенням щодня.',
          image: {
            src: 'https://images.unsplash.com/photo-1751444041692-381ca02d6bb4?w=900&auto=format&fit=crop&q=60',
            alt: 'Синьо-фіолетова орхідея Ванда',
          },
        },
        {
          id: 'exotic-6',
          name: 'Геліконія',
          latinName: 'Heliconia psittacorum',
          careLevel: 'medium',
          category: 'exotic',
          vaseLife: '14–21 день',
          season: 'Цілорічно',
          description:
            'Тропічна «омарова кігтиця» з яскраво-червоними і жовтими прицвітниками. Дуже стійка у вазі, любить тепло та воду до 1/3 вази.',
          image: {
            src: 'https://images.unsplash.com/photo-1720425180820-e1f4bd0141a5?w=900&auto=format&fit=crop&q=60',
            alt: 'Яскрава геліконія',
          },
        },
      ],
    },
    {
      type: 'features',
      anchor: 'care',
      badge: '💧 Базові правила',
      title: 'Золоті правила догляду за квітами',
      subtitle:
        'Чотири перевірені правила від флористів, які подовжать свіжість будь-якого букета та зроблять ваші рослини щасливими.',
      items: [
        {
          icon: '✂️',
          title: 'Підрізання під кутом 45°',
          text: 'Оновлюйте зріз гострим ножем або секатором на 1–2 см під кутом 45°. Це збільшує площу поглинання вологи й запобігає прилипанню стебла до дна вази.',
        },
        {
          icon: '💧',
          title: 'Чиста та прохолодна вода',
          text: 'Використовуйте ідеально чисту вазу та свіжу прохолодну воду. Міняйте воду кожні 1–2 дні та ретельно промивайте стебла та саму вазу.',
        },
        {
          icon: '🌿',
          title: 'Видалення нижнього листя',
          text: 'Все листя, що занурюється або торкається поверхні води, необхідно видалити. Це запобігає розмноженню бактерій та гнилі стебел.',
        },
        {
          icon: '🌡️',
          title: 'Мікроклімат для квітів',
          text: 'Уникайте прямого сонця, батарей та протягів. Не ставте поруч зі стиглими фруктами — вони виділяють етилен, що прискорює старіння квітів.',
        },
      ],
    },
    {
      type: 'tips',
      anchor: 'tips',
      badge: '✨ Поради флориста',
      title: 'Секрети та лайфхаки свіжості',
      cards: [
        {
          tag: 'Лайфхак',
          title: 'Як реанімувати гортензію?',
          content:
            'Оновіть зріз, зробіть поздовжній розщеп на 1 см і занурте всю шапку суцвіття у прохолодну воду на 30–40 хвилин. Гортензія швидко відновить пружність пелюсток!',
        },
        {
          tag: 'Увага',
          title: 'Небезпека бананів та яблук',
          content:
            'Стиглі фрукти виділяють газ етилен, який у 3 рази прискорює старіння квітів та обсипання пелюсток. Ніколи не ставте вазу поруч із фруктовою мискою.',
        },
        {
          tag: 'Нічний режим',
          title: 'Прохолода продовжує цвітіння',
          content:
            'На ніч переносьте вазу з квітами в найпрохолодніше місце квартири або на засклений балкон (при температурі вище 0°C). Холод значно уповільнює старіння.',
        },
      ],
    },
    {
      type: 'seasonal',
      anchor: 'seasonal',
      badge: '📅 Квітковий календар',
      title: 'Сезонний довідник флориста',
      subtitle:
        'Кожна пора року дарує свої унікальні квіти. Дізнайтеся, що купувати в сезон для найкращої якості та найдовшої стійкості.',
      seasons: [
        {
          season: 'Весна',
          emoji: '🌷',
          months: 'Березень — Травень',
          flowers: ['Тюльпан', 'Нарцис', 'Гіацинт', 'Ірис', 'Ранункулюс', 'Фрезія'],
          tip: 'Найкращий час для ніжних цибулинних квітів. Купуйте їх у стані закритого бутона — вони розкриються вдома і простоять довше.',
        },
        {
          season: 'Літо',
          emoji: '🌻',
          months: 'Червень — Серпень',
          flowers: ['Троянда', 'Соняшник', 'Лілія', 'Гортензія', 'Лаванда', 'Еустома'],
          tip: 'Пік різноманіття та аромату. Влітку квіти вʼянуть швидше через спеку — міняйте воду щодня та тримайте вазу у затінку.',
        },
        {
          season: 'Осінь',
          emoji: '🍂',
          months: 'Вересень — Листопад',
          flowers: ['Хризантема', 'Гербера', 'Стреліція', 'Целозія', 'Амарант', 'Фізаліс'],
          tip: 'Час теплих насичених кольорів. Хризантеми та герберу зрізають у прохолодну погоду, тому осінні букети стоять особливо довго.',
        },
        {
          season: 'Зима',
          emoji: '❄️',
          months: 'Грудень — Лютий',
          flowers: ['Троянда', 'Орхідея', 'Антуріум', 'Амарілліс', 'Гіацинт', 'Геліконія'],
          tip: 'Взимку квіти везуть здалеку, але стоять довше через прохолоду. Орхідеї та антуріуми — ідеальний варіант для зимового подарунку.',
        },
      ],
    },
  ],
}
