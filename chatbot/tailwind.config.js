/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {},

      colors: {
        "custom-gray": "#F0F2F5",
        "custom-button": "#4C92A1",
        "custom-placeholder": "#00000040",
        "custom-gray2": "#00000040",
        "input-borders": "#D9D9D9",
        "custom-text": "#555555",
        "Login-text": " #000000D9", // Add your custom teal color
      },
    },
  },

  plugins: [],
};
