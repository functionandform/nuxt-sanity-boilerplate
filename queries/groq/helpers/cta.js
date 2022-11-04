export default () => {
  return `
  cta[] {
      ...,
      link {
        ...,
        internal->{
          slug, 
          title,
          _type
        }
      }
    }
`}