/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        slide: 't ease 0.5s forwards',
      },
      keyframes: {
        t: {
          from: { opacity: 0 },
          to: { transform: 'translateX(0)', opacity: 1 },
        },
      },
      height: {
        100: '34.063rem',
        120: '43.75rem',
        150: '53.438rem',
      },
      screens: {
        p5: '330px',
        mt: '870px',
        mtd: '490px',
      },
      backgroundImage: {
        bmobile: "url('/assets/bmobile.png')",
        bannerpc: "url('/assets/bannerpc.png')",
        bb: "url('/assets/burgue.png')",
        batata: "url('/assets/batata.png')",
        sorvete: "url('/assets/sorvete.png')",
      },
      colors: {
        marrom: '#1D0605E5',
        marromClaro: '#1D060526',
        rosaClaro: '#3B200B0D',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        LilitaOne: ['Lilita One', 'cursive'],
      },
    },
  },
  plugins: [],
};
