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
        primary: {
          100: "#E7EAFE",
          300: "#A3AEFB",
          400: "#465DF7",
          500: "#304AF6",
          600: "#1835F5",
        },
        secondary: {
          600: "#DFECEB",
        },
        tertiary: {
          400: "#CDC5F2",
          600: "#C2B7EF",
        },
        neutral: {
          100: "#ffffff",
          500: "#78807F",
          600: "#484D4C",
          700: "#303333",
          800: "#1D1D1D",
          900: "#000000",
        },
      },
      spacing: {
        sm: '8px',
        md: '12px',
        lg: '24px',
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