/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.hbs"],
  theme: {
    colors: {
      "c-primary": '#A437DB'
    },
    extend: {
      spacing: {
        '128': '32rem',
        '4800': "75rem"
      },
    },
  },
  plugins: [require("daisyui")],
}
