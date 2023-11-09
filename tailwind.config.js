/* eslint-disable prettier/prettier */
// tailwind.config.js
export const content = ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'];
export const theme = {
  extend: {
    fontFamily: {
      Monserrat: ["Montserrat", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"]
     },
     colors: {
      primary : {
        '500':'#6355D8FF',
        '550': '#4D3ED3FF',
        '600': '#3D2DC7FF'
      }
      

    },
  },
};
export const plugins = [];
