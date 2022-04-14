module.exports = {
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: {
				'hero-pattern':
					"url('https://www.hpcismart.com/images/website/ProductProfiles/DIR_63/F_116048.jpeg')",
			},
			height: {
				screenX: '105vh',
				128: '32rem',
			},
			transitionProperty: {
				height: 'height',
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: [
				'responsive',
				'group-hover',
				'hover',
				'focus',
				'active',
			],
			textColor: ['disabled'],
			opacity: ['disabled'],

			scale: ['responsive', 'group-hover', 'hover', 'focus', 'active'],
		},
		backgroundColor: ({ after }) => after(['disabled']),
	},
	plugins: [],
};
