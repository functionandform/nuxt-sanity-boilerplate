import internalLink from './internalLink';

export default () => {
  return `
      ...,
      internal->{
        ${internalLink()}
      }
`}