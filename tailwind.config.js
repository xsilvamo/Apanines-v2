/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'azul': '#003366',
        'celeste': '#0072C6',
        'plomo': '#CCDCEB',
        'blanco': '#FFFFFF',
      },
    },
  },
  plugins: [],
};
