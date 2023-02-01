import meta from './helpers/meta';


export default (type) => {
	return groq`*[_type == "${type}"][0]{
    ...,
    ${meta()}
  }`
}