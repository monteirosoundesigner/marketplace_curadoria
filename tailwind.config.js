export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF9900',
        secondary: '#146EB4',
        dark: '#232F3E',
        light: '#F7F7F7',
      },
      fontFamily: {
        sans: ['Amazon Ember', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

