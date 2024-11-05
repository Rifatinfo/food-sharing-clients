import daisyui from './node_modules/daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        '38p': '0.38em', // Use the equivalent em value for 38%
        '28p'  : '0.23em'
      },
    },
  },
  plugins: [daisyui],
}

