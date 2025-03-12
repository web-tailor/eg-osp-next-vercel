/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#1835F5",
        gray_500: "#78807F",
        gray_600: "#484D4C"
      },
      screens: {
        sm: "576px",  // Matches `$screen-sm-min: 576px;`
        md: "768px",  // Matches `$screen-md-min: 768px;`
        lg: "992px",  // Matches `$screen-lg-min: 992px;`
        xl: "1200px", // Matches `$screen-xl-min: 1200px;`
        "2xl": "1400px", // Matches `$screen-xxl-min: 1400px;`
      },
      fontFamily: {
        avenir: ["AvenirLTPro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
