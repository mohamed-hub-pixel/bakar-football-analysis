/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#10152A',
          panel: '#171E38',
          line: '#2A3358',
        },
        chalk: '#EDEBE3',
        muted: '#8C93AD',
        gold: {
          DEFAULT: '#D9A441',
          bright: '#F0BE5C',
        },
        pitch: {
          DEFAULT: '#2F8F5B',
          deep: '#1F6B43',
        },
        card: '#C1443B',
      },
      fontFamily: {
        display: ['"Oswald"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      fontFeatureSettings: {
        tnum: '"tnum"',
      },
    },
  },
  plugins: [],
}
