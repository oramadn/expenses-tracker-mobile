/** @type {import('tailwindcss').Config} */

const { colors } = require('./theme/colors.ts');

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        background: colors.background,
        text: colors.text,
      }
    },
  },
  plugins: [],
}