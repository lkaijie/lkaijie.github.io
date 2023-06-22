/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  purge: {
    enabled: true,
  },
  content: [
    "./index.html",
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

