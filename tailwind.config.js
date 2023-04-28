/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "marble-texture": "url('public/marble-texture.avif')",
      },
    },
  },
  plugins: [],
};
