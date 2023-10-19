/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			// Using modern `rgb`
			// See: https://tailwindcss.com/docs/customizing-colors#using-css-variables
			"ctd-green": 'rgb(var(--ctd-green) / <alpha-value>)',
			"ctd-pink": 'rgb(var(--ctd-pink) / <alpha-value>)',
			"ctd-yellow": 'rgb(var(--ctd-yellow) / <alpha-value>)',
		},
		extend: {},
	},
	plugins: [],
};
