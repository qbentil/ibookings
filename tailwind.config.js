/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Overlay: "rgba(256, 256, 256, 0.4)",
        headerColor: "#2e2e2e",
      }
    },    
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      brand: ['Beau Rivage', 'Poppins', 'cursive']
    }
  },
  plugins: [],
};
