import pluralize from 'pluralize';
export default defineNuxtPlugin(() => {
  return {
    provide: {
      createPath: (element) => {
        const type = element?._type;
        const slug = element?.slug?.current;
        const pluralizedType = type ? pluralize(type) : null;
        let path = null;

        switch(type) {
          case 'homePage':
          path = `/`
          break;

          case 'landingPage' :
          path = slug ? `/${slug}` : null
          break;

          case 'role':
          path = slug ? `/for/${slug}` : null
          break;

          case 'industry': case 'solution' : case 'form' :
          path = pluralizedType && slug ? `/${pluralizedType}/${slug}` : null
          break;

          case 'article': case 'report' : case 'masterclass' :
          path = pluralizedType && slug ? `/blog/${pluralizedType}/${slug}` : null
          break;

          case 'legalPage':
          path = slug ? `/legal/${slug}` : null
          break;

          case 'blog': case 'pricing' :
          path = `/${type}`
          break;

          case 'articles' : case 'reports' : case 'masterclasses' :
          path = `/blog/${type}/${slug}`
          break;

          default :
          path = null
        }
        return path;
      }
    }
  }
})