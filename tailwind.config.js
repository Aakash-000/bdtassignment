/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      "landingtext":"#F77F00",
      "iconcolor":"#f1f1f1",
      "loginform":"#F0F4EF",
      "loginicon":"#0D1821",
      "bordercolor":"#343A40",
      "navbarbg":"#FCBF49",
      "navbutton":"#f5f5f5"
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize:{
        "lfsm":"1.5rem",
        "lfbg":"3rem",
        "logiclg":"1.5rem"
      },
    },
  },
  plugins: [],
}
