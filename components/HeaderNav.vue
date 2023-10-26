<template>
  <header class="header" :class="{'header--not-top':!isTop, 'header--menu-is-open':menuIsOpen}">
      <grid-container class="header__container">
        <grid-cell col-span-xxs="4" class="header__section">
          <div class="header__logo">
            <nuxt-link to="/"><logo class="no-margin"/></nuxt-link>
          </div>
        </grid-cell>
        <grid-cell col-span-xxs="8" class="header__section">
          
        </grid-cell>
      </grid-container>
  </header>
</template>


<script setup>
  import { useMenuStore } from '~/stores';
  import { storeToRefs } from 'pinia';
  
  const {menuIsOpen} = storeToRefs(useMenuStore());
  const props = defineProps({
    cta:{
      required:false,
      type:Array
    },
    megamenu: {
      required:false,
      type:Array
    }
  })

  const isTop = ref(true);


  const handleScroll = debounce(() => {
    checkIsTop();
  },10)


  function checkIsTop() {
    if (window.scrollY < 2) {
      isTop.value = true;
    } else {
      isTop.value = false;
    }
  }


  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
  };

  onMounted(() => {
    if (process.client) {
      checkIsTop();
      window.addEventListener('scroll', handleScroll);
    }
  })

  onUnmounted(() => {
    if (process.client) {
      window.removeEventListener('scroll', handleScroll);
    }
  })

</script>

<style lang="scss">
  
  .header {
    width:100%;
    display:block;
    margin-top:0;
    position:sticky;
    top:0; left:0; 
    z-index: 1;
    height:var(--headerHeight);
    &__logo {
      // position:absolute;
      // left:0; top:50%;
      // transform:translateY(-50%);
      display:block;
      transition:0.2s $ease-in-out-circ;
      .logo {
        height:1rem;
        @include breakpoint(lg) {
          height:vr(1);
        }
      }
    }
    &__container {

      height:100%;
      position:relative;

    }
    &__section {
      display:flex;
      align-items:center;
      
      height:100%;
      transition:0.2s $ease-in-out-circ;
      &:last-child {
        justify-content: flex-end;
      }
      
    }
    &--not-top {
    }
  }
</style>