import { createClient } from "@sanity/client";

const client = createClient({
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
        statusCode:item.from.endsWith('*') ? `"${item.statusCode}!"` : item.statusCode // use netlify's force redirect ! syntax, if redirect has a wildcard at the end
      };
    });
    console.info("Redirects are generated");
  } else {
    console.info("No redirects sourced");
  }
  return redirectsObject;
};