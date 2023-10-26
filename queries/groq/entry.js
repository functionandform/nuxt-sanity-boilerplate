import meta from './helpers/meta';
import cta from './helpers/cta';
import image from './helpers/image';

export default ({
  type = null,
  slug = null,
} = {}) => {
  return groq`*[${type ? `_type == "${type}"` : ''}${slug ? ' && slug.current == "'+slug+'"' : ''}][0]{
    ...,
    ${meta()},
    
  }`
}