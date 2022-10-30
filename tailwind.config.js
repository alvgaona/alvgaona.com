module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mplus: ["'M PLUS Rounded 1c'", 'Verdana', 'sans-serif']
      },
      height: {
        'h-screen-1/10': '10vh',
      },
      borderWidth: {
        1: '0.0625rem',
      },
      colors: {
        pantone: '#272f38',
        'amg-green-50': '#009994',
        'ag-black-1': '#141822',
        'b-red-50': '#f98888',
        'b-gray-50': '#f5f5f5',
        'b-gray-100': '#6d6d6d',
        'b-gray-200': '#4e4c4b',
      },
      minHeight: {
        1: '0.125rem',
        32: '4rem',
      },
      minWidth: {
        infty: '312.5rem',
      },
      flex: {
        set: '1 1 auto',
      },
      zIndex: {
        '-10000': 10000,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
