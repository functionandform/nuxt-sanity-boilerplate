import meta from './helpers/meta';
import cta from './helpers/cta';
import image from './helpers/image';


export default (slug) => {
	return groq`*[_type == "homePage"][0]{
    ...,
    ${meta()}
  }`
}