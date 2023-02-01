export function entryMeta(entry) {
	const meta = [];
	const entryMetaData = entry?.meta;
	if (entryMetaData) {
		if (entryMetaData.description) {
			meta.push(
				{name:'description', content:entryMetaData.description},
				{name:'twitter:description', content:entryMetaData.description}
			)
		}
		if (entryMetaData.robots) {
			meta.push(
				{name:'robots', content:entryMetaData.robots}
			)
		}
		meta.push(
	        {property:'og:title', content:entryMetaData.title?.length ? entryMetaData.title : entry.title},
	        {name:'twitter:title', content:entryMetaData.title?.length ? entryMetaData.title : entry.title}
	    )
		let ogImage = entryMetaData.ogImage;
		if (!ogImage) {
			ogImage = entry.heroImage;
		}
		if (ogImage) {
			const params = '?h=800&w=1200&fit=crop&fm=jpg&q=80';
			meta.push(
				{property:'og:image',content:ogImage.url+params},
				{property:'og:image:width',content:'1200'},
				{property:'og:image:height',content:'800'},
				{name:'twitter:image',content:ogImage.url+params},
				{property:'twitter:image:width',content:'1200'},
				{property:'twitter:image:height',content:'800'}
			)
		}
	}
	return meta;
}
