const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#FFDD00',
        secondary: '#FF5673',
        tetiary: '#00697B'
      },
      fontFamily: {
        body: ['Chivo Mono']
      }
    },
  },
  plugins: [],
});