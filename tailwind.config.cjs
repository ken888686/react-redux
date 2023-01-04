/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        grey: '#181818',
      },
      borderWidth: {
        3: '3px',
      },
      boxShadow:{
        hint:'4px 4px 20px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        primary: '#00A3FF',
      },
    },
  },
  plugins: [],
};
