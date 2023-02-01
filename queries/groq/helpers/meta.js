import image from './image';
export default () => {
  return `
  meta {
    ...,
    ogImage{${image()}}
  }
`}