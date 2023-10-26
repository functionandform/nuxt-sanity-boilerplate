export default () => {
  return `
  ...,
  "url":asset->url,
  "width":asset->metadata.dimensions.width,
  "height":asset->metadata.dimensions.height,
  "aspectRatio":asset->metadata.dimensions.aspectRatio,
  "mimeType":asset->mimeType,
  "size":asset->size,
  "extension":asset->extension,
  "originalFilename":asset->originalFilename
`}