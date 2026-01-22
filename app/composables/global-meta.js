export function useGlobalMeta(seo) {
	

  const seeAlso = [].concat(seo?.socialMedia?.sameAsUrls || []);
  let seeAlsoJustUrls = [];
  if (seeAlso?.length) {
    seeAlso.forEach((item) => {
      seeAlsoJustUrls.push(item.url);
    });
  }

  const entityImage = seo?.entity?.entityBrand;

  const organisation = {
      description: seo?.meta?.description,
      name: seo?.meta?.title,
      alternateName: seo?.entity?.alternateEntityName
        ? seo?.entity?.alternateEntityName
        : config.public?.siteName,
      description: seo?.entity?.entityDescription
        ? seo?.entity?.entityDescription
        : seo?.meta?.description,
      email: seo?.entity?.entityEmail ? seo?.entity?.entityEmail : "",
      logo: entityImage?.url,
      sameAs: seeAlsoJustUrls?.length ? seeAlsoJustUrls : [],
      telephone: seo?.entity?.entityTelephone
        ? seo?.entity?.entityTelephone
        : "",
      url: seo?.entity?.entityUrl
        ? seo?.entity?.entityUrl
        : config.public?.baseUrl,
  };

  useSchemaOrg([
    defineOrganization(organisation),
    defineWebSite({/* ... */}),
    defineWebPage(),
  ])
}