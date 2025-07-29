// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "480px", // novo breakpoint para telas pequenas (smartphones menores)
    },
    boxShadow: {
      custom:
        "0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23)",
    },
  },
  plugins: [],
};
