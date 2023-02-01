export default () => {
  return `
    link {
      ...,
      internal->{
        slug, 
        path,
        title,
        _type
      }
    }
`}