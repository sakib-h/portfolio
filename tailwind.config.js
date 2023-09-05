/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./sections/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				main: '#1f1f1f',
				primary: '#ffffff',
				alternative: '#000000',
				secondary: '#28e98c',
				'secondary-text': '#999999',
				'border-color': '#565656',
			},
		},
	},
	plugins: [],
};
