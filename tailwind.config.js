/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    // Enable the 'ring' plugin for volume control slider
    ringColor: false,
    ringOpacity: false,
    ringOffsetColor: false,
    ringOffsetWidth: false,
    ringOffsetOpacity: false,
    ringWidth: false,
  },
};
