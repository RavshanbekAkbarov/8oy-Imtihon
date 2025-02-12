export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7C5DFA",
        secondary: "#9277FF",
        dark1: "#1E2139",
        dark2: "#252945",
        light1: "#DFE3FA",
        light2: "#888EB0",
        light3: "#7E88C3",
        light4: "#F9FAFE",
        black1: "#0C0E16",
        danger1: "#EC5757",
        danger2: "#FF9797",
        bgLight: "#F8F8FB",
        dark3: "#141625",
      },
    },
  },
  plugins: [require("daisyui", "tailwind-scrollbar")],
  daisyui: {
    themes: ["night", "cupcake"],
  },
};
