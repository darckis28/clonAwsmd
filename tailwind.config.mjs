/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        pulceAnimation: "pulceButton  2s infinite",
        spinRule: "spinRule 10s infinite",
        scroll: "scroll 10s infinite linear  ",
      },
    },
  },
  plugins: [],
};
