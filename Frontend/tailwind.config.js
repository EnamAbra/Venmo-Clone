/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./App.tsx",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#82E394",

        primary: "#0D0D0D",
        secondary: "#616161",
        visaBlue: "#1A1F71",
        paypalBlue: "#003087",
      },
      fontFamily: {
        "urbanist-regular": ["Urbanist-Regular"],
        "urbanist-bold": ["Urbanist-Bold"],
        "urbanist-medium": ["Urbanist-Medium"],
      },
    },
  },
  plugins: [],
};
