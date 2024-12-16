/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Purple100: "hsl(254, 88%, 90%)",
        Purple500: "hsl(256, 67%, 59%)",
        Yellow100: "hsl(31, 66%, 93%)",
        Yellow500: "hsl(39, 100%, 71%)",
        White: "hsl(0, 0%, 100%)",
        Black: "hsl(0, 0%, 7%)",
      },
      fontFamily: {
        DMSans : ["DMSans"]
      },
      screens : {
        "laptop" : "650px"
      }
    },  
  },
  plugins: [],
}

