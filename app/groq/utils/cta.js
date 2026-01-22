import link from './link';
export default () => {
  return `
  cta[] {
      ...,
      ${link()}
    }
`}