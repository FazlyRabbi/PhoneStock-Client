module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('../doctors-portal-client/src/assets/images/bg.png')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",

          secondary: "#19D3AE",

          accent: "#3A4256",

          neutral: "#FE8280",

          "base-100": "#FFFFFF",

          info: "#00A163",

          success: "#F7F7F7",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
