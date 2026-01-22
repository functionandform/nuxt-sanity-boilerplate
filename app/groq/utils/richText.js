import internalLink from './internalLink';
import image from './image';

export default () => {
	return `
        ...,
        markDefs[]{
            ...,
            _type == "link" => {
                ...,
                internal->{
                    ${internalLink()}
                }
            },
        },
        _type == "imagery" => {
            ...,
            images[] {
                ${image()}
            }
        }
    `
}