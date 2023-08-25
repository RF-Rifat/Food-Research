/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#b3bc38",

          secondary: "#8bd3ed",

          accent: "#9cf29b",

          neutral: "#1e2125",

          "base-100": "#f4f3f6",

          info: "#8dc6e8",

          success: "#78edd0",

          warning: "#edcb45",

          error: "#ed505f",
        },
      },
    ],
  },
};
