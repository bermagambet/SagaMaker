/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./Navigation.{js,jsx,ts,tsx}",
  ],
  plugins: [],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      animation: {},
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      colors: {
        primary: "#ffffff",
        secondary: "#b89e9e",
        "action-primary": "#e82630",
        "action-secondary": "#362b2b",
        footer: "#362b2b",
        icon: "#b89e9e",
      },
      filter: {
        dropShadowDark: "drop-shadow(0 1px 1px rgb(255 255 255 / 1))",
        dropShadowLight: "drop-shadow(0 1px 1px rgb(0 0 0 / 1))",
      },
      fontFamily: {
        sans: ["PlusJakartaSans"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
};
