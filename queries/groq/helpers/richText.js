import link from './link';
export default () => {
	return `
		...,
	    markDefs[]{
	        ...,
	        _type == "link" => {
	        	...,
	            ${link()}
	        }
	    },
	`
}