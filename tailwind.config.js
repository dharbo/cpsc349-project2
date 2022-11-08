/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.hbs"],
  theme: {
    extend: {
      colors: {
        "c-primary": '#A437DB',
        "card-primary": "#B4ACD31A",
        "pale-purple" : "#B3ABD2"
      },
      spacing: {
        '128': '32rem',
        '4800': "75rem"
      },
    },
  },
  plugins: [require("daisyui")],
}
