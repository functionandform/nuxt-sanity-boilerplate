<template>
  <div class="app">
    
  </div>
</template>


<script setup>

  import groqQuery from "~/groq/globals";
  const config = useRuntimeConfig();

  const { data: globals, pending, error } = await useSanityQuery(groqQuery)

  if (error && error.value) {
  throw createError({ statusCode: 500 });
} else if (globals?.value?.seo) {
  useGlobalMeta(globals?.value.seo)
}

</script>

<style lang="scss">
  .app {
    display:flex;
    flex-direction: column;
    padding-bottom:vr(5);
    &__content {
      min-height:100vh;
    }
  }

</style>