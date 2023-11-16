import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FE5C3E',
        grey: '#DBDBDE',
        ash: '#F3F3F3',
        lightGrey: '#FCFCFC',
        dark: '#181818',
        lightText: '#E6E6E6',
        imgBackground: '#F6F1F0'
      },
      boxShadow: {
        custom: '0px 5px 15px 10px #e9ebee',
      }
    },
  },
  plugins: [],
}
export default config
