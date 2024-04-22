/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "media",
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
			},
			screens: {
				xs: "368px",
			},
			keyframes: {
				"pulse-shadow": {
					"0%": {
						"box-shadow":
							"0 4px 14px 0, linear-gradient(to top right, #948afe, #fe8aca)",
					},
					"25%": {
						"box-shadow":
							"0 4px 14px 0, linear-gradient(to top right, #948afe, #ba8afe)",
					},
					"50%": {
						"box-shadow":
							"0 4px 14px 0, linear-gradient(to top right, #948afe, #ba8afe)",
					},
					"75%": {
						"box-shadow":
							"0 4px 14px 0, linear-gradient(to top right, #948afe, #f48afe)",
					},
					"100%": {
						"box-shadow":
							"0 4px 14px 0, linear-gradient(to top right, #948afe, #fe8aca)",
					},
				},
			},
			animation: {
				"pulse-shadow": "pulse-shadow 2.5s ease-in-out infinite",
			},
		},
	},
	plugins: [],
};
