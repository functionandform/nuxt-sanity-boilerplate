export default () => {
  return `
    ...,
  "metadata":asset->metadata,
  "url":asset->url,
  "width":asset->metadata.dimensions.width,
  "height":asset->metadata.dimensions.height,
  "aspectRatio":asset->metadata.dimensions.aspectRatio,
  "mimeType":asset->mimeType,
  "size":asset->size,
  "extension":asset->extension,
  "palette":asset->metadata.palette,
  "hasAlpha":asset->metadata.hasAlpha,
  "lqip":asset->metadata.lqip,
  "blurHash":asset->metadata.blurHash,
`}