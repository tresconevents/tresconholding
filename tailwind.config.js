/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
       'anek': ['Anek Devanagari', 'sans-serif'],
        backgroundImage: {
          'hero-pattern': "url('./public/saleem.png')",
         
        }
      },
      width: {
        'card-mobile': '345px',
        'card-tablet': '250px',
        'card-laptop': '310px',
        // 'card-desktop': '410px',
        'card-xl':'410px',
        'image-mobile': '200px',
        'image-tablet': '200px',
        'image-desktop': '250px',
        'image-laptop': '250px',
        'image-xl':'360px',
        'card-tablet-custom': '361px',
        'card-laptop-custom': '364px',
      },
      height: {
        'card-mobile': '208px',
        'card-tablet': '256px',
        'card-desktop': '256px',
        'image-mobile': '280px',
        'card-laptop-custom': '364px',
        'image-tablet': '330px',
        'image-desktop': '364px',
        'image-laptop': '364px',
      },
      fontSize: {
        'xxs': '0.625rem',
        'xxl': '1.75rem',
    },
    
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
