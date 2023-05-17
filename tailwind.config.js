/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EEEEEE",
        socialBlue: "#00ADB5",
        tertiary: "#393E46",
        socialBg: "#222831",
        success: "#4BB543",
        error: "#CC0000",
        info: "#3498DB",
        warning: "#F9A825",
        socialBlue100: "#66ced3",
        socialBlue200: "#33bdc4",
        socialBlue300: "#008a91",
        socialBlue400: "#00686d",
        socialBlue500: "#004548",
      },
      boxShadow: {
        sm: "0 1px 4px 0 rgba(0,173,181,1)",
        md: "0px 4px 8px -1px #00686d, 0 2px 4px -1px #004548",
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
      },
      screens: {
        mobile: "640px",
        tablet: "768px",
        desktop: "1024px",
      },
    },
  },
  plugins: [],
};
