/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-red": "hsl(var(--clr-light-red) / <alpha-value>)",
        "orange-yellow": "hsl(var(--clr-orange-yellow) / <alpha-value>)",
        "green-teal": "hsl(var(--clr-green-teal) / <alpha-value>)",
        "cobalt-blue": "hsl(var(--clr-cobalt-blue) / <alpha-value>)",
        "slate-blue": "hsl(var(--clr-slate-blue) / <alpha-value>)",
        "royal-blue": "hsl(var(--clr-royal-blue) / <alpha-value>)",
        "violet-blue": "hsl(var(--clr-violet-blue) / <alpha-value>)",
        "persian-blue": "hsl(var(--clr-persian-blue) / <alpha-value>)",
        "pale-blue": "hsl(var(--clr-pale-blue) / <alpha-value>)",
        lavender: "hsl(var(--clr-lavender) / <alpha-value>)",
        "gray-blue": "hsl(var(--clr-gray-blue) / <alpha-value>)",
      },
      fontFamily: {
        "hanken-grotesk": ["Hanken Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
