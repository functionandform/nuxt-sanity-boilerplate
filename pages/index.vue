<template>
  <div>
    <loading v-if="pending"/>
    <template v-else-if="entry">
     <hero-builder :entry="entry"/>
     <builder-landing-page :entry="entry"/>
    </template>
  </div>
</template>


<script setup>
  import groqQuery from '~/queries/groq/home-page';
  const config = useRuntimeConfig();
  const route = useRoute();
  const query = groqQuery();

  const { pending, data:entry, error } = useSanityQuery(query);
  console.log({pending: pending.value, error:error.value, entry:entry.value});
  if (error && error.value) {
    throw createError({statusCode:500})
  } else if (entry) {
    useHead({
      title:entry.value?.meta?.title,
      meta: [
        {name:'description', content:entry.value?.meta?.description},
        {name:'robots', content:entry.value?.meta?.robots?.length ? entry.value?.meta?.robots : 'all'},
        {property:'og:title', content:entry.value?.meta?.title?.length ? entry.value?.meta?.title : entry.value?.title},
        {name:'twitter:title', content:entry.value?.meta?.title?.length ? entry.value?.meta?.title : entry.value?.title},
        {name:'twitter:description', content:entry.value?.meta?.description},
        // {property:'og:image',content:ogImage},
        // {property:'og:image:width',content:'1200'},
        // {property:'og:image:height',content:'600'},
        // {name:'twitter:image',content:ogImage},
        // {property:'twitter:image:width',content:'1200'},
        // {property:'twitter:image:height',content:'600'}
      ],
      link: [
        {rel:'canonical',href:'/'}
      ]
    })
   } else {
      console.error('Unknown error occured')
    }
</script>