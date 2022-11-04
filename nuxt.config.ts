
export default defineNuxtConfig({
	modules: ["@nuxtjs/sanity",'nuxt-jsonld','@pinia/nuxt','@nuxt/image-edge'],
	sanity: {
		projectId: "say5yn59",
		apiVersion: '2022-10-14',
		useCdn:false,
		dataset:process.env.SANITY_DATASET
	},
	privateRuntimeConfig: {
		sanity: {
			token: process.env.SANITY_TOKEN,
		},
	},
	publicRuntimeConfig:{
		siteName:'Cool Planet',
		baseUrl:process.env.BASE_URL
	},
	target: 'static',
	image: {
  		// Options
  		sanity: {
			projectId: 'say5yn59',
			dataset: 'production'
		},
  		screens:{
  			xxs:320,
			xs: 359,
			sm: 640,
			md:768,
			lg: 1024,
			xl: 1280,
			xxl:1536,
			xxxl:1920,
			quadHd:2400,
			'4k':3700,
  		}
	},
	css:[
		"@/assets/scss/main.scss"
	],
	vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/scss/tools.scss" as *;'
                },
            },
        },
    },
    alias: {
        "@app": "/@app"
    }
})
