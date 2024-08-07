/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          normal:'#45905F',
          dark:'#294356',
        }
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}