/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'amarillo': '#F8E71C',
        'celeste': '#4A90E2',
        'gris': '#F5F5F5',
        'blanco': '#FFFFFF',
        'verde': '#4EA641',
      },
    },
  },
  plugins: [],
};
