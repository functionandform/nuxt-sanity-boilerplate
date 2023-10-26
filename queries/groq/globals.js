import image from './helpers/image';
import link from './helpers/link';
import meta from './helpers/meta';
import cta from './helpers/cta';

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
	}`
}