import cta from './helpers/cta';

export default (slug) => {
	return groq`*[_type == "homePage"][0]{
    ...
  }`
}