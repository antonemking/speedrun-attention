// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        retro: ['"Press Start 2P"', 'cursive'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
