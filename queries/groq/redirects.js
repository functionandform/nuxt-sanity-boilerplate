export default () => {
	return groq`*[_type == "redirects"]{
    'from':fromPath,
	'redirect':{'to':toPath, 'statusCode':statusCode}
  }`
}