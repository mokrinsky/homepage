/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        jetbrains: ["var(--font-jetbrains)", ...fontFamily.sans],
        caveat: ["var(--font-caveat)", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@catppuccin/tailwindcss")
  ]
}
