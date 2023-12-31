/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '204px',
      // => @media (min-width: 340px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      backgroundImage: _theme => ({
        'imgSm': "url('./heroMobile.jpeg')",    
        'imgMd': "url('./heroTab.jpeg')",
        'imgLg': "url('./heroImg.png')",

      })

    },
  },
  plugins: [],
}