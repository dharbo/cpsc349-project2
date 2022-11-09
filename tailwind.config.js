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
      height: {
				"10v": "10vh",
				"20v": "20vh",
				"30v": "30vh",
				"40v": "40vh",
				"50v": "50vh",
				"60v": "60vh",
				"70v": "70vh",
				"80v": "80vh",
				"90v": "90vh",
			},
    },
  },
  plugins: [require("daisyui")],
}
