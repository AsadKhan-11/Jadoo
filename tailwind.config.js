import { defineConfig } from "tailwindcss";

export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        moveX: {
          "0%": { transform: "translateX(-10%) scale(1.1)" },
          "50%": { transform: "translateX(0%) scale(1.1)" },
          "100%": { transform: "translateX(-10%) scale(1.1)" },
        },
      },
      animation: {
        moveX: "moveX 2s infinite ease-in-out",
      },
    },
  },
});
