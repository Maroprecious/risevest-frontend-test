/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          1: "var(--teal-1)",
          2: "var(--teal-2)",
          3: "var(--teal-3)",
          4: "var(--teal-4)",

        },
        primary: {
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--softbody-text)",
          400: "var(--primary-400)"
        },
        black: {
          1: "var(--black-1)",
          2: "var(--black-2)"
        },
        orange: {
          4: "var(--orange-4)"
        },
        indigo: {
          1: "var(--indigo-1)",
          4: "var(--indigo-4)"
        }

      },
      fontFamily: {
        "tomato-semibold": ['var(--font-tomato-semibold)'],
        "tomato-regular": ['var(--font-tomato-regular)'],
        "tomato-bold": ['var(--font-tomato-bold)'],
        "tomato-light": ['var(--font-tomato-light)'],
        "tomato-medium": ['var(--font-tomato-medium)'],
        "dmsans-regular": ['var(--font-dmsans-regular)'],
        "dmsans-medium": ['var(--font-dmsans-medium)'],
        "dmsans-light": ['var(--font-dmsans-light)']
      },
      // screens: {
      //   'xs': '300px',
      // },
      maxWidth: (theme, { breakpoints }) => ({
        0: "0",
        ...theme("spacing"),
        ...breakpoints(theme("screens")),
        wide: "1300px",
        full: "100%",
        screen: "100vw",

      }),
    },
  },
  plugins: [],
}

