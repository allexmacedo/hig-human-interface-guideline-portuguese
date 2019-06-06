import pkg from './package'

export default {
mode: 'universal',

/*
** Headers of the page
*/
head: {
	title: pkg.name,
	meta: [
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
		{ hid: 'description', name: 'description', content: pkg.description }
	],
	script: [
	{ src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
	// { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js' },
	{ src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' },
	],
	link: [
		{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
		{ rel: 'shortcut icon', href:'favicon.ico'},
		{ rel: 'mask-icon', href: 'apple-logo.svg', color:'#333333' },
		{ rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' }
	]
},

/*
** Customize the progress-bar color
*/
loading: { color: '#fff' },

/*
** Global CSS
*/
css: [
],

/*
** Plugins to load before mounting the App
*/
plugins: [
],

/*
** Nuxt.js modules
*/
modules: [
	// Doc: https://axios.nuxtjs.org/usage
	'@nuxtjs/axios',
	'@nuxtjs/pwa'
],
/*
** Axios module configuration
*/
axios: {
	// See https://github.com/nuxt-community/axios-module#options
},

/*
** Build configuration
*/
build: {
	/*
	** You can extend webpack config here
	*/
	extend(config, ctx) {
	}
},

router: {
	base: '/hig-human-interface-guidelines-portuguese/'
}
}
