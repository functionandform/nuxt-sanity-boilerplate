<template>
  <NuxtImg :src="image.asset._ref" :alt="image.alt" :width="image.width" :height="image.height" :modifiers="{crop:image.crop,hotspot:image.hotspot}" provider="sanity" fit="cover" class="sanity-img" custom v-slot="{ src, isLoaded, imgAttrs }" :sizes="sizes" :loading="loading">
  <img v-if="isLoaded" v-bind="imgAttrs" :style="mergedStyle" :class="class" :src="src">
  <img v-else :src="image.lqip" :alt="image.alt" :style="mergedStyle" :class="class">
</NuxtImg>
</template>

<script setup>
const props = defineProps({
  image: {
    type: Object,
    required: true
  },
  sizes: {
    type: String,
    default: 'xxs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw'
  },
  class: {

  },
  loading:{
    default:'lazy'
  },
  style: {

  }

})


const objectPositionStyle = computed(() => {
  const hs = props.image?.hotspot
  if (!hs || typeof hs.x !== 'number' || typeof hs.y !== 'number') return {}

  // clamp just in case
  const x = Math.min(1, Math.max(0, hs.x))
  const y = Math.min(1, Math.max(0, hs.y))

  return {
    objectPosition: `${x * 100}% ${y * 100}%`
  }
})

const mergedStyle = computed(() => {
  const base = {
    objectFit: 'cover',
    ...objectPositionStyle.value
  }

  return {
    ...base,
    ...(props.style || {})
  }
})



</script>

<style scoped>
.sanity-img {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.sanity-img__placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  filter: blur(20px);
  transform: scale(1.05);
  transition: opacity 0.7s ease;
  z-index: 1;
}

.sanity-img__main {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.7s ease;
  z-index: 2;
}

.sanity-img__main--loaded {
  opacity: 1;
}
</style>
