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
        lausanne: ['TWK Lausanne', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['TWK Lausanne', 'Georgia', 'Times New Roman', 'serif'],
        montserrat: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;