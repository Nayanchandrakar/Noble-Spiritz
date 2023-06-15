/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui:{
    themes: ["light"],
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#b78134',
        secondary: "#00d564",
        base: "#fff"
      },
      boxShadow:{
        '5xl': '0px 3px 15px rgba(0, 0, 0, 0.15)',
        "custom-black": 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      },
      backgroundImage:{
        "rose-green": ["linear-gradient(90deg, rgba(253,229,231,1) 0%, rgba(229,240,236,1) 50%, rgba(207,249,240,1) 100%)"],
        "glass-effect": ["linear-gradient(124deg, rgba(216,250,239,1) 0%, rgba(252,176,69,0) 81%)"],
      },
    },
  },
  plugins: [
     require('daisyui')
  ],
}
