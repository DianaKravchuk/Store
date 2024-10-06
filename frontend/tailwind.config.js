/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      md: "744px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1920px",
    },
    // container: {
    //   center: true,
    //   padding: {
    //     DEFAULT: "12px",
    //     lg: "86px",
    //     xl: "124px",
    //     "2xl": "268px",
    //   },
    // },
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        "custom-bg": "rgba(244, 244, 244, 0.8)",
        "modal-overlay": "rgba(0, 0, 0, 0.45)",
        "grey-000": "#f4f4f4",
        "grey-opacity-80%": "rgba(244, 244, 244, 0.8)",
        "black-000": "#000",
        "dark-grey-hovered": "#181818",
        "dark-grey-focused": "#474747",
        "dark-grey-pressed": "#575757",
        "dark-grey-disabled": "#e4e4e4",
        white: "#fff",
        "grey-002": "#59595a",
        "grey-logo": "#2d2d2d",
        "light-grey-hovered": "rgba(224, 224, 224, 0.16)",
        "light-grey-focused": "rgba(224, 224, 224, 0.24)",
        "light-color-pressed": "rgba(224, 224, 224, 0.32)",
        "red-error": "#cc2e25",
        "grey-opacity-35%": "rgba(139, 139, 139, 0.35)",
        "white-opacity-50%": "rgba(255, 255, 255, 0.5)",
        "white-opacity-65%": "rgba(255, 255, 255, 0.65)",
        "grey-001": "#989899",
        beige: "#cdc0c0",
        "green-google": "#4caf50",
        "blue-google": "#1976d2",
        "red-google": "#ff3d00",
        "yellow-google": "#ffc107",
        "background-color": "#f4f4f4",
      },
      backgroundImage: {
        login: "url('@assets/images/SignUp.png')",
        error: "url('@assets/images/SignUp.png')",
        checked: "url('@/assets/icons/checkbox.svg')",
      },
      boxShadow: {
        "button-hover":
          "0 1px 2px 0 rgba(0, 0, 0, 0.3), 0 1px 3px 0 rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
