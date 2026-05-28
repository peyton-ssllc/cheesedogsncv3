import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cheese: "#F7C948",
        mustard: "#F2A900",
        dogred: "#D62828",
        grill: "#171717",
        cream: "#FFF4DB",
        pickle: "#3F7D20"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        display: ["var(--font-display)", "Arial Black", "sans-serif"]
      },
      boxShadow: {
        crisp: "0 18px 50px rgba(23, 23, 23, 0.14)",
        button: "0 10px 0 #171717"
      }
    }
  },
  plugins: []
};

export default config;
