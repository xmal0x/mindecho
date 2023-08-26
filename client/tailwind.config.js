/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D9BF0",
        secondary: "#F7F9F9",
        white: "#FFFFFF",
        gray: "#526572",
        black: "#101419",
      },
    },
  },
  plugins: [],
}

