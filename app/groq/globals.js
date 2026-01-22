import image from './utils/image';
import link from './utils/link';
import internalLink from './utils/internalLink';
import meta from './utils/meta';
import { defineQuery } from "groq";

export default defineQuery(
	`{
		'seo':*[_type == "seo"][0]{
			...,
			${meta()},
			entity {
				...,
				entityBrand {${image()}}
			}
		},
	}`
);