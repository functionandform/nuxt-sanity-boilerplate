import { resolve } from "path";

import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
// import { getRedirects } from "./server/utils/redirects.ts";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en-GB",
      },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },
      ],
      link: [
        // {
        //   rel: "icon",
        //   sizes: "any", // 32.x32
        //   href: "/icon/favicon.ico",
        // },
        // {
        //   rel: "apple-touch-icon", // 180
        //   type: "image/svg+xml",
        //   href: "/icon/apple-touch-icon.png",
        // },
        // {
        //   rel: "icon",
        //   type: "image/svg+xml",
        //   href: "/icon/icon.svg",
        // },
        { rel: "manifest", href: "/icon/manifest.webmanifest" },
        // { rel: "stylesheet", href: "https://use.typekit.net/tqh2giv.css", defer: true, media:"print", onload:"this.media='all'"},
      ],
    },
  },
  modules: [
    // "@nuxtjs/sanity",
    "nuxt-jsonld",
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxtjs/robots",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-simple-sitemap",
    "nuxt-schema-org",
    "@vueuse/nuxt",
  ],
  // routeRules: getRedirects(),
  robots: {
    configPath:'@/server/utils/robots.ts'
  },
  // sanity: {
  //   projectId: process.env.SANITY_PROJECT_ID,
  //   apiVersion: process.env.SANITY_API_VERSION,
  //   useCdn: process.env.SANITY_CDN,
  //   dataset: process.env.SANITY_DATASET,
  // },
  runtimeConfig: {
    public: {
      siteName: process.env.SITE_NAME,
      siteUrl: process.env.BASE_URL,
      baseUrl: process.env.BASE_URL,
      //gtmId: process.env.GTM_ID
    },
  },
  target: "static",
  image: {
    // Options
    // sanity: {
    //   projectId: process.env.SANITY_PROJECT_ID,
    //   dataset: process.env.SANITY_DATASET,
    // },
    screens: {
      xxs: 320,
      xs: 359,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      xxxl: 1920,
      quadHd: 2400,
      "4k": 3700,
    },
  },
  css: [
    "@/assets/scss/main.scss"
    ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/tools.scss" as *;',
        },
      },
    },
  },
  alias: {
    "@app": "/@app",
  },
  generate: {
    fallback: true
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/404.html'
      ]
    }
  }
});
