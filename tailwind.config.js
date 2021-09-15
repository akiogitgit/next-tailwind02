module.exports = {
  mode: 'jit', // 初めからjit mode
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'], //これやらないとファイル膨大 作ったファイルをあてる　folder名 componentにしてたらcss効かなかった
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
