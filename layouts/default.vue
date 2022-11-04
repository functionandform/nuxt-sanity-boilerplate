<template>
	<div>
		<main class="default">
			<slot/>
		</main>
		<main-footer/>
		<cookie-consent/>
</div>
</template>

<script setup>
	const config = useRuntimeConfig();
	// const query = groq`*[_type == "seo"][0]{
	// 	meta.ogImage: {
	// 		'url': meta.ogImage.asset->url, 
	// 	}, ...
	// }`;

	const query = groq`{'seo':*[_type == "seo"][0], 'navigation':*[_type == "navigation"][0]}`;

	const { data:globals } = useSanityQuery(query);

	const seo = globals?.value?.seo ? globals.value.seo : {};
	const navigation = globals?.value?.navigation ? globals.value.navigation : {};

	let meta = [];
	let link = [];
	meta.push(
		{name:'description', content:seo?.meta?.description},
		{name:'robots', content:seo?.meta?.robots ? seo?.meta?.robots : 'all'},
		// {name:'referrer',content:'no-referrer-when-downgrade'},
		{property:'og:title', content:seo?.meta?.title},
		{property:'og:locale',content:'en_GB'},
		{property:'og:site_name',content:config.siteName},
		{property:'og:type',content:'website'},
		{property:'og:url',content:config.baseUrl}
	)
	const socialMedia = seo?.socialMedia;
	if (socialMedia?.twitterHandle) {
		meta.push(
			{name:'twitter:title', content:seo?.meta?.title},
			{name:'twitter:card', content:'summary'},
			{name:'twitter:description', content:seo?.meta?.description}
		)
	}

	const ogImage = seo?.meta?.ogImage?.url;
	if (ogImage) {
		meta.push(
			{property:'og:image',content:ogImage},
			{property:'og:image:width',content:'1200'},
			{property:'og:image:height',content:'600'},
			{name:'twitter:image',content:ogImage},
			{property:'twitter:image:width',content:'1200'},
			{property:'twitter:image:height',content:'600'}
		)
	}
	const seeAlso = [].concat(seo?.socialMedia?.sameAsUrls || []);
	let seeAlsoJustUrls = [];
	if (seeAlso && seeAlso.length) {
		seeAlso.forEach(item => {
			seeAlsoJustUrls.push(item.url);
			meta.push(
				{property:'og:see_also',content:item.url}
			)
		})
	}

	link.push(
		{rel:'canonical',href:config.baseUrl},
		{rel:'home',href:config.baseUrl}
	)

	useJsonld(() => ([
		{
			"@context":"http://schema.org",
			"@type":"ProfessionalService",
			"description":seo?.meta?.description,
			// "image":{"@type":"ImageObject",	
			// 	"url":"https://cdn.thewriter.com/seo/_1200x630_crop_center-center_82_none/seo-image-default-blue.jpg?mtime=1643903554"
			// },
			"mainEntityOfPage":config.baseUrl,
			"name":seo?.meta?.title,
			"url":config.baseUrl
		},
		{
			"@context":"http://schema.org",
			"@id":`${seo?.entity?.entityUrl ? seo?.entity?.entityUrl : config.baseUrl}#identity`,
			"@type":"ProfessionalService",
			// "address":{
			// 	"@type":"PostalAddress",
			// 	"addressCountry":"United Kingdom",
			// 	"addressLocality":"London",
			// 	"addressRegion":"England",
			// 	"postalCode":"SE1 1XF",
			// 	"streetAddress":"72 Borough High Street"
			// },
			"alternateName":seo?.entity?.alternateEntityName ? seo?.entity?.alternateEntityName : config.siteName,
			"description":seo?.entity?.entityDescription ? seo?.entity?.entityDescription : seo?.meta?.description,
			"email":seo?.entity?.entityEmail ? seo?.entity?.entityEmail : '',
			"image":{
				"@type":"ImageObject",
				"height":"248",
				"url":"/",
				"width":"600"
			},
			// "logo":{
			// 	"@type":"ImageObject",
			// 	"height":"60",
			// 	"url":"",
			// 	"width":"145"
			// },
			"name":seo?.entity?.entityName ? seo?.entity?.entityName : config.siteName,
			//"priceRange":"$$$",
			"sameAs":seeAlsoJustUrls ?? seeAlsoJustUrls.length ? seeAlsoJustUrls : [],
			"telephone":seo?.entity?.entityTelephone ? seo?.entity?.entityTelephone : "",
			"url":seo?.entity?.entityUrl ? seo?.entity?.entityUrl : config.baseUrl
		},
		{
			"@context":"http://schema.org",
			"@id":"https://www.functionandform.co.uk#creator",
			"@type":"Organization",
			"address":{
				"@type":"PostalAddress",
				"addressCountry":"United Kingdom",
				"addressLocality":"London",
				"addressRegion":"England",
				"postalCode":"N1 7LJ",
				"streetAddress":"8 Shepherdess Place"
			},
			"alternateName":"Function & Form",
			"description":"Digital creative agency specialising in web design, development and branding.",
			"email":"hello@functionandform.co.uk",
			"image":{
				"@type":"ImageObject",
				"height":"192",
				"url":"https://www.functionandform.co.uk/brand/functionandform-logo.png",
				"width":"616"
			},
			"logo":{
				"@type":"ImageObject",
				"height":"192",
				"url":"https://www.functionandform.co.uk/brand/functionandform-logo.png",
				"width":"616"
			},
			"name":"Function & Form",
			"url":"https://www.functionandform.co.uk"
		},
		{
			"@context":"http://schema.org","@type":"BreadcrumbList","description":"Breadcrumbs list","itemListElement":[
			{
				"@type":"ListItem","item":"https://www.domain.com","name":"Page title","position":1
			}
				],
				"name":"Breadcrumbs"
		},
		{
			"siteType":"Organization",
			"siteSubType":"LocalBusiness",
			"siteSpecificType":"ProfessionalService",
			"computedType":"ProfessionalService",
			"genericName":seo?.entity?.entityName ? seo?.entity?.entityName : config.siteName,
			"genericAlternateName":seo?.entity?.alternateEntityName ? seo?.entity?.alternateEntityName : config.siteName,
			"genericDescription":seo?.entity?.entityDescription ? seo?.entity?.entityDescription : seo?.meta?.description,
			"genericUrl":seo?.entity?.entityUrl ? seo?.entity?.entityUrl : config.baseUrl,
			// "genericImage":"https://cdn.thewriter.com/branding/company-logo.png",
			// "genericImageWidth":"600",
			// "genericImageHeight":"248",
			"genericTelephone":seo?.entity?.entityTelephone ? seo?.entity?.entityTelephone : "",
			"genericEmail":seo?.entity?.entityEmail ? seo?.entity?.entityEmail : "",
			// "genericStreetAddress":"",
			"genericAddressLocality":"London",
			"genericAddressRegion":"England",
			// "genericPostalCode":"",
			"genericAddressCountry":"United Kingdom",
			// "genericGeoLatitude":"",
			// "genericGeoLongitude":"",
			// "personGender":"",
			// "personBirthPlace":"",
			// "organizationDuns":"",
			// "organizationFounder":"",
			// "organizationFoundingDate":"",
			// "organizationFoundingLocation":"",
			// "organizationContactPoints":"",
			// "corporationTickerSymbol":"",
			// "localBusinessPriceRange":"$$$",
			// "localBusinessOpeningHours":[
			// 	{"open":null,"close":null},
			// 	{"open":null,"close":null},
			// 	{"open":null,"close":null},
			// 	{"open":null,"close":null},
			// 	{"open":null,"close":null},
			// 	{"open":null,"close":null},
			// 	{"open":null,"close":null}
			// ],
			// "restaurantServesCuisine":"",
			// "restaurantMenuUrl":"",
			// "restaurantReservationsUrl":""
		}
	]));

	useHead({
		title:seo?.meta?.title,
		meta:meta,
		link:link
	})


</script>