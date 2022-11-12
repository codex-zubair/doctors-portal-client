/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {},
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": " #0FCFEC",

          "secondary": "#19D3AE",

          "accent": "#3A4256",

          "neutral": "#181A2A",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],

}



