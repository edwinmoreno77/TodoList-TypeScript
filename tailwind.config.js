/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        xxs:"0.625rem",
        tiny:"0.525rem"
      }
    },
  },
  plugins: [],
}