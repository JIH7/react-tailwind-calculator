/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{jsx,js}"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        //Theme 1
        //Backgrounds
        veryDarkDesaturatedBlueMain: 'hsl(222, 26%, 31%)',
        veryDarkDesaturatedBlueKeypad: 'hsl(223, 31%, 20%)',
        veryDarkDesaturatedBlueScreen: 'hsl(224, 36%, 15%)',

        //Keys
        desaturatedDarkBlue: 'hsl(225, 21%, 49%)',
        desaturatedDarkBlueShadow: 'hsl(224, 28%, 35%)',

        red: 'hsl(6, 63%, 50%)',
        darkRed: 'hsl(6, 70%, 34%)',

        lightGrayishOrange: 'hsl(30, 25%, 89%)',
        grayishOrange: 'hsl(28, 16%, 65%)',

        //Text
        veryDarkGrayishBlue: 'hsl(221, 14%, 31%)',
        white: 'hsl(0, 0%, 100%)',

        //Theme 2
        //Backgrounds
        lightGray: 'hsl(0, 0%, 90%)',
        grayishRed: 'hsl(0, 5%, 81%)',
        veryLightGray: 'hsl(0, 0%, 93%)',

        //Keys
        darkModerateCyan: 'hsl(185, 42%, 37%)',
        veryDarkCyan: 'hsl(185, 58%, 25%)',

        orange: 'hsl(25, 98%, 40%)',
        darkOrange: 'hsl(25, 99%, 27%)',

        lightGrayishYellow: 'hsl(45, 7%, 89%)',
        darkGrayishOrange: 'hsl(35, 11%, 61%)',

        //Text
        veryDarkGrayishYellow: 'hsl(60, 10%, 19%)',
        //White 'hsl(0, 0%, 100%)'

        //Theme 3
        //Backgrounds
        veryDarkViolet: 'hsl(268, 75%, 9%)',
        veryDarkVioletKeypad: 'hsl(268, 71%, 12%)',

        //Keys
        darkViolet: 'hsl(281, 89%, 26%)',
        vividMagenta: 'hsl(285, 91%, 52%)',

        pureCyan: 'hsl(176, 100%, 44%)',
        softCyan: 'hsl(177, 92%, 70%)',

        veryDarkVioletKey: 'hsl(268, 47%, 21%)',
        darkMagenta: 'hsl(290, 70%, 36%)',

        //Text
        lightYellow: 'hsl(52, 100%, 62%)',
        veryDarkBlue: 'hsl(198, 20%, 13%)',
        //White 'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}