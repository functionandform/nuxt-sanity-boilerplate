import { resolve } from "path";
import sanityClient from "@sanity/client";

import dynamicRoutes from "./helpers/dynamicRoutes";

const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  apiVersion: process.env.SANITY_API_VERSION,
  useCdn: process.env.SANITY_CDN,
  dataset: process.env.SANITY_DATASET,
});

export const getRedirects = async () => {
  let redirectsObject = {};

  const redirectQuery = `*[_type == "redirect"]{
    'from':fromPath,
    'redirect':{'to':toPath, 'statusCode':statusCode}
  }`;
  const data = await client.fetch(redirectQuery);
  if (data && data.length) {
    data.forEach((item) => {
      redirectsObject[item.from] = {
        redirect: item.redirect,
      };
    });
    console.info("Redirects are generated");
  } else {
    console.info("No redirects sourced");
  }
  return redirectsObject;
};

export default defineNuxtConfig({
  app: {
    head: {
      title: "Boilerplate",
      htmlAttrs: {
        lang: "en-GB",
      },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },
      ],
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicon/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon/favicon-16x16.png",
        },
        { rel: "manifest", href: "/favicon/site.webmanifest" },
        { rel: "stylesheet", href: "https://use.typekit.net/tqh2giv.css" },
      ],
    },
  },
  modules: [
    "@nuxtjs/sanity",
    "nuxt-jsonld",
    "@pinia/nuxt",
    "@nuxt/image-edge",
    "@nuxtjs/robots",
    "~/modules/sitemap",
    '@vueuse/nuxt',
  ],
  sitemap: {
    hostname: process.env.BASE_URL,
  },
  routeRules: getRedirects(),
  // hooks: {
  //   "pages:extend"(pages) {
  //     pages.push(
        
  //       {
  //         name: "site.blogIndex",
  //         path: "/blog",
  //         file: resolve("/pages/blog/[category]/page/[page].vue"),
  //       },
  //     );
  //   },
  // },
  robots: () => {
    if (process.env.ENVIRONMENT && process.env.ENVIRONMENT === "production") {
      // production environment - allow robots
      return {
        sitemap: process.env.BASE_URL + "/sitemap.xml",
        UserAgent: "*",
        Disallow: ["/admin", "/.env", "/users"],
      };
    } else {
      // every other environment - block robots
      return {
        sitemap: process.env.BASE_URL + "/sitemap.xml",
        UserAgent: "*",
        Disallow: "/",
      };
    }
  },
  sanity: {
    projectId: process.env.SANITY_PROJECT_ID,
    apiVersion: process.env.SANITY_API_VERSION,
    useCdn: process.env.SANITY_CDN,
    dataset: process.env.SANITY_DATASET,
  },
  runtimeConfig: { 
    public:{
      siteName:process.env.SITE_NAME,
      baseUrl:process.env.BASE_URL,
      gtmId:process.env.GTM_ID
    },
    },
  target: "static",
  image: {
    // Options
    sanity: {
      projectId: process.env.SANITY_PROJECT_ID,
      dataset: process.env.SANITY_DATASET,
    },
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
  css: ["@/assets/scss/main.scss"],
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
});