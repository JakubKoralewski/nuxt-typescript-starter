export default {
	env: {},
	head: {
		title: 'jakub-koralewski-typescript-starter-1',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				hid: 'description',
				name: 'description',
				content: 'Change your life with this one simple trick!',
			},
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},
	loading: { color: '#3B8070' },
	css: ['~/assets/css/main.css'],
	build: {},
	modules: ['@nuxtjs/axios'],
	axios: {},
};
