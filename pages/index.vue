<template>
  <div class="page-content">
    <h1>welcome</h1>
  </div>
</template>

<script setup>
  import entryMeta from "~/utils/entry-meta";
  // import groqQuery from "~/queries/groq/entry";
  const config = useRuntimeConfig();
  // const query = groqQuery();

  // const sanity = useSanity();
  // const {pending,data: entry,error} = await useLazyAsyncData("index", () => sanity.fetch(query));
  // if (error?.value) {
  //   throw createError({ statusCode: 500 });
  // }

  // watch(entry,() => {
  //   if (entry?.value) {
  //     entryMeta({entry:entry.value,path:`/`});
  //   }
  // },{immediate:true})
</script>


<style lang="scss">

</style>