// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    pageTransition:false,
    viewTransition: true, 
    head: {
      title: "Untitled",
      htmlAttrs: { lang: "en-GB" },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" }
      ],
      link: [
        { rel: "home", href: process.env.BASE_URL },
        { rel: "icon", sizes: "any", href: "/icon/favicon.ico" },
        { rel: "apple-touch-icon", type: "image/png", href: "/icon/apple-touch.png" },
        { rel: "icon", type: "image/svg+xml", href: "/icon/default.svg" }
      ],
    },
  },
  future: {
    compatibilityVersion: 3
  },
  compatibilityDate: '2026-01-22',

  devtools: {
    enabled: true,
    timeline: { enabled: true },
  },
  modules: [
    "@nuxtjs/sanity", 
    "@nuxt/fonts",
    '@nuxt/image',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-schema-org'
  ],
  sitemap: {
    siteUrl: process.env.NUXT_BASE_URL,
  },
  // fonts: {
  //   google: {
  //     families: {
  //       'PT Sans': [400, 500],
  //       'Bona Nova': [400, 700],
  //       'Corinthia':[700]
  //     },
  //     display: 'swap',
  //     preload: true,
  //     preconnect: true, 
  //   },
  // },
  sanity: {
    projectId: process.env.NUXT_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_SANITY_DATASET,
    apiVersion: process.env.NUXT_SANITY_API_VERSION || "2025-04-01",
    token: process.env.NUXT_SANITY_API_READ_TOKEN, // Only required when using a private dataset
    // visualEditing: {
    //   token: process.env.NUXT_SANITY_API_READ_TOKEN,
    //   studioUrl: process.env.NUXT_SANITY_STUDIO_URL,
    //   zIndex: 51,
    // },
  },
  runtimeConfig: {
    public: {
      studioUrl: process.env.SANITY_STUDIO_URL,
      baseUrl: process.env.NUXT_BASE_URL, 
    },
  },
  image: {
    sanity: {
      projectId: process.env.NUXT_SANITY_PROJECT_ID,
      dataset: process.env.NUXT_SANITY_DATASET,
    },
    screens: {
      xxs: 320, xs: 359, sm: 640, md: 768, lg: 1024,
      xl: 1280, xxl: 1536, xxxl: 1920, quadHd: 2400, "4k": 3700,
    }
  },

  css: ["~/assets/scss/main.scss"],

  vite: {
    optimizeDeps: {
      include: ["shallowequal", "lodash/startCase.js"],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/tools.scss" as *;',
        },
      },
    },
  },
  generate: {
    fallback: true,
  },
  nitro: {
    preset: 'netlify',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/404.html'],
    },
    routeRules: {
      '/**': {
        headers: {
          'Content-Security-Policy':
            "frame-ancestors 'self' http://localhost:3333 https://*.sanity.studio",
          'X-Frame-Options': 'ALLOWALL'
        }
      }
    }
  },
});
