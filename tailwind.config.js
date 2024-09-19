/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      background: '#15323F',
      green: '#DBD41D',
      blue: '#0ABAFF',
      white: '#FFF',
      black: '#0D0D0D'
    },
    extend: {
      fontFamily: {
        'poppins-regular': ['Poppins_400Regular'],
        'poppins-medium': ['Poppins_500Medium'],
        'poppins-semibold': ['Poppins_600SemiBold'],
      },
    },
    plugins: [],
  }
}
