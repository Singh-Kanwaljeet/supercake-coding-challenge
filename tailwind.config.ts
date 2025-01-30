import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#1369D9",
        border: "#E0E8F2",
        background: "#F5F7FA",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#111827",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
