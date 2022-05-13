module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': {
          100: '#666666',
          200: '#5c5c5c',
          300: '#525252',
          400: '#474747',
          500: '#3d3d3d',
          600: '#333333',
          700: '#292929',
          800: '#1f1f1f',
          900: '#121212',
        },
        'light': {
          100: '#F5F5F5',
          200: '#EBEBEB',
          300: '#E0E0E0',
          400: '#D6D6D6',
          500: '#CCCCCC',
          600: '#C2C2C2',
          700: '#B8B8B8',
          800: '#ADADAD',
          900: '#A3A3A3',
        },
      },
    }
  },
  plugins: [],
}