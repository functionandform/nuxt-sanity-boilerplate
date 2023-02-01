import meta from './helpers/meta';
import cta from './helpers/cta';

export default (slug) => {
	return groq`*[_type == "legalPage" && slug.current == "${slug}"][0]{
    ...,
    ${meta()}
  }`
}