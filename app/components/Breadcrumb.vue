<template>  
    <div class="breadcrumbs__crumb" property="itemListElement" typeof="ListItem" :title="getName">
      <slot/>
      <meta v-if="position" property="position" :content="position" />
      <meta v-if="getName" property="name" :content="getName.trim()" />
    </div>
</template>


<script setup>
  const slots = useSlots();

  const props = defineProps({
    position:{type:[Number,String],required:false},
    name:{type:String,required:false}
  });

  const getName = computed(()=> {
    if (props.name) {
      return props.name;
    } else if (slots.default()[0]?.children && typeof slots.default()[0]?.children.default == 'function') {
      return slots.default()[0]?.children.default()[0].children;
    } else if (typeof slots.default()[0]?.children) {
      return slots.default()[0]?.children;
    }
  })


</script>