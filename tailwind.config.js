/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow:{
        '5xl': '0px 3px 15px rgba(0, 0, 0, 0.15)'
      },
      backgroundImage:{
        "rose-green": ["linear-gradient(90deg, rgba(253,229,231,1) 0%, rgba(229,240,236,1) 50%, rgba(207,249,240,1) 100%)"],
      },
    },
  },
  plugins: [],
}
