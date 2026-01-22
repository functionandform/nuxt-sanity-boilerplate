<template>
    <accordion>
      <accordion-item v-for="(faq,i) in faqs" :key="i">
        <template #title>
          <h2 class="h3">{{faq.question}}</h2>
        </template>
        <template #content>
          <div>
          <rich-text :blocks="faq.answer"/>
        </div>
        </template>
      </accordion-item>
    </accordion>

</template>

<script setup>
  const props = defineProps({
    faqs:{ 
      type:Array,
      default:[]
    }
  })
</script>
