/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'Poppins': ['Poppins'],
			},
			colors: {
				'Red': '#ea5353',
				'Cyan': '#45d3d3',
				'Orange': '#fcaf4a',
				'Blue': '#549ef2',
				'Very-Dark-Blue': '#4c4e61',
				'Grayish-Blue': '#a3a5ae',
				'Very-Light-Gray': '#fafafa',
			}
		},
	},
	plugins: [],
}
