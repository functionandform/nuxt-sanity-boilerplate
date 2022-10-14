
export default defineNuxtConfig({
	modules: ["@nuxtjs/sanity",'nuxt-jsonld','@pinia/nuxt'],
	sanity: {
		projectId: "2cs5rz6l",
		apiVersion: '2022-03-25',
		useCdn:false,
		dataset:process.env.SANITY_DATASET
	},
	privateRuntimeConfig: {
		sanity: {
			token: process.env.SANITY_TOKEN,
		},
	},
	publicRuntimeConfig:{
		siteName:process.env.SITE_NAME,
		baseUrl:process.env.BASE_URL
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
