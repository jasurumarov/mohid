/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: '16px',
      center: true,
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1142px",
    },
    extend: {
      colors: {
        colorBlack: "#0C0C0C",
        colorGray: "#8B8E99",
        colorBlue: "#3858D6"
      },
      boxShadow: {
        shadowHeader: '',
      },
    },
    fontFamily: {
      lexand: ['Lexand'],
      lexand500: ['Lexand500'],
      lexand600: ['Lexand600'],
      lexand700: ['Lexand700'],
    }
  },
  plugins: [],
}