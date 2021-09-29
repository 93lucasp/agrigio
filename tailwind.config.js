module.exports = {
  purge: [
    './src/**/*.vue',
    './src/index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // fontFamily: {
    //   'sans': 'Poiret One, cursive, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    //   'parisienne': 'Parisienne, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    //   'ubuntu': 'Ubuntu, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    // },
    // colors: {
    //   // transparent: 'rgba(255,255,255,0)',
    //   // white: '#FFFFFF',
    //   // black: '#000000',
    //   // green: {
    //   //   '100': '#EAF1EE',
    //   //   '500': '#87B3AE',
    //   //   '700': '#4a8182',
    //   //   '900': '#386061'

    //   // },
    //   // pink: {
    //   //   '100': '#f8efed',
    //   //   '500': '#edd8d1',
    //   //   '900': '#dbb1a3'
    //   // }
    // },
    extend: {
      colors: {
        transparent: 'rgba(255,255,255,0)',
        primary: '#0c2437',
        secondary: '#0e2d43',
      },
    },
  },
  variants: {
    extend: {
      width: ['group-hover'],
    }
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '100%',
          maxWidth: '100%',
          paddingLeft: '.75rem',
          paddingRight: '.75rem',
          '@screen md': {
            paddingLeft: '1.25rem',
            paddingRight: '1.25rem',
          },
          '@screen lg': {
            maxWidth: '992px',
            paddingLeft: '0',
            paddingRight: '0',
          },
        }
      })
    }
  ],

}
