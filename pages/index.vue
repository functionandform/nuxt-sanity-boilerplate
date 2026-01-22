<template>
	<grid-container>
		<grid-cell>
		
	</grid-cell>
	</grid-container>
</template>

<script setup>

  import groqQuery from "~/groq/entry";
  const config = useRuntimeConfig();

  const { data: entry, pending, error } = await useSanityQuery(groqQuery, {
		type: 'home',
		slug:null
})

  if (error?.value) {
    throw createError({statusCode:500})
  }


  watch(entry?.value?._id,()=> {
    if (entry?.value?._id) {
      useEntryMeta({entry:entry.value,path:'/'})
    }
  },{immediate:true});


</script>

<style lang="scss">

</style>