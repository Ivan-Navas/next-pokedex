import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width:{
        "4%": "4%",
        "20": "20px",
        "28": "28px",
        "48%": "48%",
        "50": "50px",
        "80%": "80%",
        "90%": "90%",
        "164": "164px",
        "600": "600px",
      },
      height:{
        "5%": "5%",
        "20": "20px",
        "43.5": "43.5px",
        "50": "50px",
        "70%": "70%",
        "80%": "80%",
        "90%": "90%",
        "656": "656px",
        "700": "700px",
      },
      colors:{
        "backBlack": "#2F2F2F",
        "caseColor": "#DD092F",
        "pokedexLedBlue": "#3CA1FD",
        "borderLedSilver": "#D9D9D9",
      },
      borderWidth:{
        "5": "5px",
      },
      borderRadius:{
        "5": "5px",
        "16": "16px",
        "50": "50px",
        "100%": "100%"
      },
      margin:{
        "3": "3px",
        "7": "7px",
        "109": "109px"
      },
      spacing:{
        "43.5": "43.5px",
        "22": "22px",
        "13": "13px",
      }
    },
  },
  plugins: [],
};
export default config;
