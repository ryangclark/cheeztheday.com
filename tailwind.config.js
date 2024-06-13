/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				// Using modern `rgb`
				// See: https://tailwindcss.com/docs/customizing-colors#using-css-variables
				'ctd-green': 'rgb(var(--ctd-green) / <alpha-value>)',
				'ctd-orange-dark': 'rgb(var(--ctd-orange-dark) / <alpha-value>)',
				'ctd-orange-light': 'rgb(var(--ctd-orange-light) / <alpha-value>)',
				'ctd-pink-dark': 'rgb(var(--ctd-pink-dark) / <alpha-value>)',
				'ctd-pink-light': 'rgb(var(--ctd-pink-light) / <alpha-value>)',
				'ctd-teal': 'rgb(var(--ctd-teal) / <alpha-value>)',
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
