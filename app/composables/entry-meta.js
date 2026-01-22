export function useEntryMeta({ entry = null, title = null, path = null } = {}) {
  const config = useRuntimeConfig();
  const entryMetaData = entry?.meta;
  const siteName = config.$siteName;
  const setTitle = (entryMetaData?.title || title || entry?.title) ? `${entryMetaData?.title || title || entry?.title}${siteName ? ' - '+siteName : ''}` : siteName;
  const canonical = `${config.public.baseUrl}${path ? path : "/"}`;
  let meta = {
    title: setTitle,
    ogTitle: setTitle,
    twitterTitle: setTitle,
    description: entryMetaData?.description || null,
    twitterDescription: entryMetaData?.description || null,
    robots: entryMetaData?.robots || null,
    ogDescription: entryMetaData?.description,
    canonical: canonical,
    ogUrl: `${config.public.baseUrl}${path ? path : "/"}`,
  };

  if (entryMetaData?.ogImage) {
    const imageObject = {
      url: `${entryMetaData?.ogImage?.url}?w=1200&fit=crop&fm=jpg&q=80`,
      width: entryMetaData?.ogImage.width,
      height: entryMetaData?.ogImage.height,
      type: entryMetaData?.ogImage.mimeType,
    };
    meta.ogImage = imageObject;
    meta.twitterImage = imageObject;
    meta.twitterCard = "summary_large_image";
  }
  useSeoMeta(meta);
  useHead({
    title: setTitle,
    link:[
      {
        rel:'canonical',
        href:canonical
      }
    ]
  })
}
