<template>
  <footer class="footer">
    <container class="footer__container">
      <row class="footer__row">
        <column class="footer__column" xxs="12">
        
        </column>
      </row>
    </container>
    <container class="footer__container">
      <div class="footer__caveats" id="global-caveats"></div>
    </container>
  </footer>
</template>

<script setup>

  const year = computed(() => {
      const currentTime = new Date();
      return currentTime.getFullYear();
  })

  const props = defineProps({
    invert: {
      type:Boolean,
      default:false
    },
    // header: {
    //   type:Object,
    //   default:true
    // },
    minimal: {
      type:Boolean
    }
  })

</script>


<style lang="scss">
  .footer {
    display:block;
    position:relative;
    padding:vr(2) 0;
    &__container {

    }
  }
</style>