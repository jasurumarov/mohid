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
        shadowHeader: '0px 4px 12px 0px #CFCFCF40',
        shadowMenu: '0 3px 5px #0002',
      },
    },
  },
  plugins: [],
}