import image from './helpers/image';
import link from './helpers/link';
import meta from './helpers/meta';
import cta from './helpers/cta';
import listedEntries from './helpers/listedEntries';

export default () => {
	return groq`{
		'seo':*[_type == "seo"][0]{
			...,
			${meta()},
			entity {
				...,
				entityBrand {${image()}}
			}
		}, 
		'navigation':*[_type == "navigation"][0]{
			...,
			utilityMenu[] {
				...				
			}
		}

	}`
}