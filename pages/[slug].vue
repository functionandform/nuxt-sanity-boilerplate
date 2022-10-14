<template>
  <div>
    <template v-if="entry">
      <h1>{{entry.title}}</h1>
     <main>
        
      </main>
    </template>
  </div>
</template>


<script setup>
  const config = useRuntimeConfig();
  const route = useRoute();
  const query = groq`*[_type == "landingPage" && slug.current == "${route.params.slug}"][0]`;
  const { data:entry } = useSanityQuery(query);

  if (entry) {

    useHead({
      title:entry.meta?.title,
      meta: [
        {name:'description', content:entry.meta?.description},
        {name:'robots', content:entry.meta?.robots ? entry.meta?.robots : 'all'},
        {property:'og:title', content:entry.meta?.title ? entry.meta?.title : entry.title},
        {name:'twitter:title', content:entry.meta?.title ? entry.meta?.title : entry.title},
        {name:'twitter:description', content:entry.meta?.description},
        // {property:'og:image',content:ogImage},
        // {property:'og:image:width',content:'1200'},
        // {property:'og:image:height',content:'600'},
        // {name:'twitter:image',content:ogImage},
        // {property:'twitter:image:width',content:'1200'},
        // {property:'twitter:image:height',content:'600'}
      ],
      link: [
        {rel:'canonical',href:`${config.baseUrl}/${route.params.slug}`},
        {rel:'home',href:config.baseUrl}
      ]
    })
  }
</script>