/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'alroq-gold': '#C9A84C',
        'alroq-black': '#0A0A0A',
        'alroq-card': '#181818',
        'alroq-border': '#222222',
        'alroq-muted': '#888888',
        'alroq-secondary': '#666666',
        'alroq-white': '#F5F3EE',
      },
      fontFamily: {
        'sans': ['DM Sans', 'sans-serif'],
        'bebas': ['Bebas Neue', 'sans-serif'],
        'mono': ['Space Mono', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
