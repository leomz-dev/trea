/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: [],
      },
      colors: {
        primary: '#2563eb',
        whatsapp: '#25d366',
        secondary: '#1e293b',
      },
    },
  },
  plugins: [],
}