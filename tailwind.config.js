/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0F8156',
        secondary: "#E63527",
        secondaryBlue: "#4A47F3"
      },
      fontFamily: {
        body: ['Source Sans Pro', 'sans-serif']
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
