import { defineQuery } from "groq";
import meta from './utils/meta';
import image from './utils/image';
import file from './utils/file';
import richText from './utils/richText';
import link from './utils/link';
import cta from './utils/cta';
import pageContent from './utils/pageContent';

export default defineQuery(/* groq */
  `*[_type == $type && (!defined($slug) || slug.current == $slug)][0]{
    ...,
    ${pageContent()},
    ${cta()},
    ${meta()},
}`);
