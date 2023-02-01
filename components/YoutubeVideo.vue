<template>
  <youTube :src="url" :id="id" class="youtube-video"/>
</template>


<script setup>
  import YouTube from 'vue3-youtube'



  import getId from "get-youtube-id";
  const id = ref(null);
  const props = defineProps({
    url:{required:true,type:String}
  })

  id.value = getId(props.url);

</script>


<style lang="scss">
  .youtube-video {
    margin-bottom:vr(1);
    @include aspect-ratio(16,9);
    position:relative;
    width:100% !important;
    height:auto !important;
    iframe {
      position:absolute !important;
      top:0; left:0; width:100% !important; height:100% !important;
    }
  }

</style>