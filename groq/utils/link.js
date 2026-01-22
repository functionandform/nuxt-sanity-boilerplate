import internalLink from './internalLink';

export default () => {
  return `
    link {
      ...,
      internal->{
        ${internalLink()}
      }
    }
`}