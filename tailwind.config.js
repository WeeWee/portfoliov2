/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
			},
		},
	},
	plugins: [],
};
