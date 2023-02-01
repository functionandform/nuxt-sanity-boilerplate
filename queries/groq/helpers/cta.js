export default () => {
  return `
  cta[] {
      ...,
      link {
        ...,
        internal->{
          slug, 
          title,
          path,
          _type
        }
      }
    }
`}