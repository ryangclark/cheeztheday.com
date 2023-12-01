/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				// Using modern `rgb`
				// See: https://tailwindcss.com/docs/customizing-colors#using-css-variables
				'ctd-green': 'rgb(var(--ctd-green) / <alpha-value>)',
				'ctd-pink': 'rgb(var(--ctd-pink) / <alpha-value>)',
				'ctd-yellow': 'rgb(var(--ctd-yellow) / <alpha-value>)',
			},
			fontFamily: {
				handwritten: ['"Brisa W01 Regular"'],
				museo: ['MuseoSlab-500', 'ui-serif'],
			},
		},
	},
	plugins: [],
};
