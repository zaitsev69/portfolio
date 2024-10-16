import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-slab': ['Roboto Slab', 'serif'],
        'archivo-narrow': ['Archivo Narrow', 'sans-serif'],
      },
      backgroundImage: {
        'guillemet': "url('/guille.png')",
      }

    },
  },
  plugins: [],
};
export default config;