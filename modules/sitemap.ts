import sanityClient from "@sanity/client";
import { mkdirSync, writeFileSync } from "fs";
import { Readable } from "stream";
import { dirname } from "path";
import { SitemapStream, streamToPromise } from "sitemap";
import { defineNuxtModule, createResolver } from "@nuxt/kit";

const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  apiVersion: process.env.SANITY_API_VERSION,
  useCdn: process.env.SANITY_CDN,
  dataset: process.env.SANITY_DATASET,
});

export default defineNuxtModule({
  meta: {
    name: "sitemap",
    version: "0.0.1",
    configKey: "sitemap",
    compatibility: { nuxt: "^3.0.0-rc.11" },
  },
  defaults: {
    hostname: "http://localhost:3000",
  },
  async setup(options, nuxt) {
    async function generateSitemap(routes) {
      // 1. Generate sitemap based on folder structure
      let sitemapRoutes = routes.map((route) => route.path);

      // 2. Generate sitemap based on Sanity documents
      // Query for all documents with a slug and path
      const documentsQuery = `*[slug.current != null && path != null] | order(path asc) {
        _id,
        _type,
        _updatedAt,
        slug,
        path
      }`;

      // Fetch documents from Sanity
      const documents = await client.fetch(documentsQuery);

      // Map the documents to an array of paths and return
      sitemapRoutes = [
        ...sitemapRoutes
          .filter((route) => route.indexOf(":") === -1)
          .map((route) => ({
            url: route,
            lastmod: new Date().toISOString(),
          })),
        ...documents.map((doc) => ({
          url: doc.path,
          lastmod: doc._updatedAt,
        })),
      ];

      // https://github.com/ekalinin/sitemap.js#generate-a-one-time-sitemap-from-a-list-of-urls
      const stream = new SitemapStream({ hostname: options.hostname });
      const sp = streamToPromise(
        Readable.from(sitemapRoutes).pipe(stream)
      ).then((data) => data.toString());
      return sp;
    }

    function createSitemapFile(sitemap, filepath) {
      const dirPath = dirname(filepath);
      mkdirSync(dirPath, { recursive: true });
      writeFileSync(filepath, sitemap);
    }

    const resolver = createResolver(import.meta.url);
    const filePath = resolver.resolve(
      nuxt.options.srcDir,
      "node_modules/.cache/.sitemap/sitemap.xml"
    );

    nuxt.options.nitro.publicAssets = nuxt.options.nitro.publicAssets || [];
    nuxt.options.nitro.publicAssets.push({
      baseURL: "/",
      dir: dirname(filePath),
    });

    nuxt.hook("pages:extend", async (pages) => {
      const sitemap = await generateSitemap(pages);

      createSitemapFile(sitemap, filePath);
      // Added output to confirm that the sitemap has been created at the end of the build process
      console.log("Sitemap created");
    });
  },
});
