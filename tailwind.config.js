/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      height: {
        pg: 'calc(100vh - 5rem)',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#00FFCC',
      secondary: '#00CCFF',
      accent: '#FFCD4F',
      muted: '#001111',
      highlight: '#FF00CC',
      gray: '#999999',
      black: '#000000',
      white: '#ffffff',
    },
  },
  plugins: [],
};
