# Руководство по Шрифтам и Стилям

Этот документ описывает, как в проекте настроена система стилизации с использованием Tailwind CSS v4 и Next.js Font Optimization.

## Обзор

Система состоит из трех ключевых частей, которые работают вместе:
1.  **Загрузка шрифтов** (`src/app/layout.tsx`)
2.  **Конфигурация Tailwind** (`src/app/globals.css`)
3.  **Применение стилей** (в компонентах)

---

### 1. Загрузка Шрифтов (`src/app/layout.tsx`)

- **Технология:** Мы используем встроенный в Next.js модуль `next/font/google` для оптимальной загрузки шрифтов.
- **Шрифты:**
    - `Inter`: Основной шрифт для всего текста (sans-serif).
    - `Caveat`: Рукописный шрифт для акцентных заголовков (serif/cursive).
- **Механизм:** В файле `src/app/layout.tsx` мы создаем объекты для обоих шрифтов. Сам факт их создания гарантирует, что Next.js загрузит их и сделает доступными для браузера по их CSS-именам (`'Inter'`, `'Caveat'`).
- **Применение по умолчанию:** К тегу `<body>` применяется только класс `font-sans`, который устанавливает `Inter` как шрифт по умолчанию для всего сайта.

```tsx
// src/app/layout.tsx
import { Inter, Caveat } from 'next/font/google';

// Создаем объекты для загрузки шрифтов
const inter = Inter({ subsets: ['latin', 'cyrillic'] });
const caveat = Caveat({ subsets: ['latin', 'cyrillic'], weight: ['400', '700'] });

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      {/* Применяем ТОЛЬКО основной шрифт по умолчанию */}
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
```

### 2. Конфигурация Tailwind (`src/app/globals.css`)

- **Технология:** Мы используем CSS-first подход из **Tailwind CSS v4**. Файл `tailwind.config.ts` **не используется** для настройки шрифтов.
- **Механизм:** Вся конфигурация происходит в `src/app/globals.css` с помощью директивы `@theme`.
- **Реализация:** Мы переопределяем стандартные утилиты Tailwind (`font-sans` и `font-serif`), указывая им использовать имена шрифтов, загруженных через `next/font`.

```css
/* src/app/globals.css */
@import "tailwindcss";

@theme {
  /* Говорим Tailwind: класс font-sans должен использовать шрифт 'Inter' */
  --font-sans: 'Inter', sans-serif;
  /* Говорим Tailwind: класс font-serif должен использовать шрифт 'Caveat' */
  --font-serif: 'Caveat', cursive;
}
```

### 3. Применение Стилей в Компонентах

- **Основной текст:** Не требует никаких дополнительных классов, так как `font-sans` уже применен к `<body>`.
- **Рукописный шрифт:** Для применения шрифта `Caveat` к любому элементу достаточно добавить ему класс `font-serif`.

**Пример из `src/app/page.tsx`:**
```tsx
<div className="font-serif text-2xl">
  Каждый заслуживает второй шанс
</div>
```

Эта система является современной, производительной и простой в поддержке.
