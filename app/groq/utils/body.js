import image from './image';
import link from './link';
import cta from './cta';
import file from './file';
import video from './video';
import richText from './richText';
import internalLink from './internalLink';

export default () => {
	return `body[] {
        ...,
        markDefs[]{
            ...,
            _type == "link" => {
                ...,
                internal->{
                    ${internalLink()}
                }
            }
        }
    }`
}