/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'tb': '640px',
        // => @media (min-width: 640px) { ... }
        'md': '992px'
      },
      backgroundImage: {
        'doll-house': "url('@/assets/images/image5.jpeg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }

    },
  },
  plugins: [],
}

