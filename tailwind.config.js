/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "SF-Pro-Bold" : ["SFProDisplayBold", "sans-serif"],
        "SF-Pro-Regular" : ["SFProDisplayRegular", "sans-serif"],
        "SF-Pro-Light" : ["SFProDisplayLight", "sans-serif"],
        "SF-Pro-Semibold" : ["SFProDisplaySemibold", "sans-serif"],
        "Space-Grotesk-VariableFont_wght" : ["SpaceGrotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
}

