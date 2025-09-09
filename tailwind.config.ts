import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Настроим шрифты, которые уже были в globals.css
        sans: ['Inter', 'sans-serif'],
        serif: ['Caveat', 'cursive'],
      },
      colors: {
        // Добавим кастомные цвета для соответствия дизайну
        primary: '#FF6B6B',
        secondary: '#4ECDC4',
        accent: '#FFE66D',
      }
    },
  },
  plugins: [],
};
export default config;
