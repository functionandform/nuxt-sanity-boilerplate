<template>

    <nuxt-link class="listed-entry" :to="$createPath(entry)">
      <div class="listed-entry__card">
        <figure class="listed-entry__media">
          <sanity-img v-if="entry?.hero?.media?.length" class="listed-entry__image" :image="entry.hero.media[0].image" sizes="xxs:50vw md:33.33vw lg:33.33vw xl:25vw xxl:25vw"/>
        </figure>
        <div class="listed-entry__details">
          <h3>{{entry.title}}</h3>
          <p class="small">{{entry.summary}}</p>
        </div>
      </div>
    </nuxt-link>
</template>

<script setup>
  const props = defineProps({
    entry:{required:true,type:Array},
    compact:{default:false,type:Boolean}
  })
</script>


<style lang="scss">
  .listed-entry {
    display:block;
    color:inherit;
    margin-bottom:vr(1);
    &__card {

    }
    hr {
      height:vr(0.5);
    }
    p {
      margin-bottom:vr(0.5);
    }
    &__media {
      overflow: hidden;
      aspect-ratio:5/3;
      width:100%;
      position: relative;
      display:block;
      margin-bottom:vr(0.5);
      figcaption {
        position: absolute;
        top:0; left:0;
        width:100%; height:100%;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        text-align:center;
        z-index: 1;
        background:rgba(0,0,0,0.3);
        text-shadow: 0 0 0.75em black;
        h2,h3,h4,h5 {
          margin-bottom:0 !important;
        }
      }
      img {
        height:100%;
        width:100%;
        display:block;
        object-fit: cover;
      }
    }
  }
</style>