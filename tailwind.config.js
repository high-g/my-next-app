module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'], // まとめて消去する対象
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        // ブレークポイント
        // tablet: '768px',
        // laptop: '1024px',
        // desktop: '1280px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
