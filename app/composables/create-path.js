import pluralize from 'pluralize';

export function useCreatePath(element) {
  if (!element) {
    return null;
  }
  const type = element?._type;
  const slug = element?.slug?.current;
  const category = element?.category?.slug?.current;
  const pluralizedType = type ? pluralize(type) : null;
  let path = null;
  switch(type) {
  case 'home':
    path = `/`
  break;

  default :
    path = null
  }
  return path;
}