<template>
  <header class="header" :class="{'header--not-top':!isTop}">
    <container class="header__container">
      <div class="header__logo">
        <nuxt-link to="/"><logo class="no-margin"/></nuxt-link>
      </div>
      <section class="header__section">
        
      </section>
    </container>
  </header>
</template>


<script setup>
  const props = defineProps({
  	cta:{
  		required:false,
  		type:Array
  	},
  	megaMenu: {
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
  .header,.header-space {
    width:100%;

    display:block;
    height:vr(2.5);
    margin-bottom:vr(1);
    z-index: 10;
    background-color: transparent;
  }
  .header {
    width:100%;
    display:block;
    margin-top:0;
    margin-bottom:vr(1);
    position:sticky;
    top:vr(0.5); left:0; 
    // @include breakpoint(lg) {
    //   top:vr(0.5);
    // }
    &__logo {
      margin:0 vr(1);
      position:absolute;
      left:0; top:50%;
      transform:translateY(-50%);
      display:block;
      transition:0.2s $ease-in-out-circ;
      @include breakpoint(lg) {
        left:0;
        margin:0 vr(1);
        .logo {
          height:2rem;
        }
      }
      @include breakpoint(xxl) {
        .logo {
          height:2.5rem;
        }
      }
    }
    &__container {
      display:flex;
      align-items:center;
      justify-content: flex-end;
      height:100%;
      position:relative;
      &::before {
        content:"";
        position:absolute;
        left:vr(0.5); right:vr(0.5); bottom:0; top:0; display:block;
        opacity:0;
        transition:0.1s $ease-in-out-circ;
        @include breakpoint(lg) {
          left:vr(1); right:vr(1); 
        }
      }
    }
    &__section {
    	display:flex;
    	align-items:center;
      margin-left:vr(1);
      height:100%;
      transition:0.2s $ease-in-out-circ;
      &--desktop-only {
        @include breakpoint-less-than(lg) {
          display:none;
        }
      }
    }
    &__cart-link {
      .icon {
        height:vr(1); width:vr(1);
      }
    }
    &--not-top {
      .header__logo {
        left:0;
        @include breakpoint(lg) {
          left:vr(1);
        }
      }
      .header__section:last-child {
        padding-right:vr(1);
      }
      .header__container::before {opacity:1; box-shadow: $ui-shadow-1;}
    }
  }
</style>