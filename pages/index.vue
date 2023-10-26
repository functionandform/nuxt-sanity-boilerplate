<template>
  <div class="index">
    <grid-container>
      <h1>Welcome</h1>
    </grid-container>
  </div>
</template>

<script setup>
  import entryMeta from "~/utils/entryMeta";
  import groqQuery from "~/queries/groq/entry";
  const config = useRuntimeConfig();
  const route = useRoute();
  // const query = groqQuery({type:'indexPage',slug:route.params.slug});

  // const sanity = useSanity();
  // const {
  //   pending,
  //   data: entry,
  //   error,
  // } = await useLazyAsyncData("aboutIndex", () => sanity.fetch(query));
  // if (error?.value) {
  //   throw createError({ statusCode: 500 });
  // } else if (!error?.value && !pending?.value && !entry?.value) {
  //     throw createError({ statusCode: 404, fatal:true });
  // }

  // watch(entry,() => {
  //   if (entry?.value) {
  //     entryMeta({entry:entry.value, path:`/`});
  //   }
  // },{immediate:true})

</script>
