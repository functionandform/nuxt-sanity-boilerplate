<template>
  <div class="inview-transition" :class="{'inview-transition--not-inview':!inview,'inview-transition--inview':inview,'inview-transition--visible':true,'inview-transition--image':image,'inview-transition--clip':image && clip,'inview-transition--scroll-in':scrollIn}" ref="element">
    <slot/>
  </div>
</template>

<script setup>
  import { useIntersectionObserver } from '@vueuse/core';
  const inview = ref(false);
  const element = ref(false);

  const { stop:inviewStop } = useIntersectionObserver(
    element,
    ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        inview.value = true;
        if (!props.keepAlive) {
          inviewStop
        }
      } else if (props.keepAlive) {
        inview.value = false;
      }
    },{threshold: 0.25,rootMargin:'90% 0% -10% 0%'},
  )

  const props = defineProps({
    keepAlive:{type:Boolean,default:true},
    // visible:{type:Boolean,default:true},
    image:{type:Boolean,default:false},
    clip:{type:Boolean,default:true},
    scrollIn: {type:Boolean,default:false}
  })


</script>

<style lang="scss">
  .inview-transition {
    @media (prefers-reduced-motion: no-preference) {
      display:block;
      min-width: 0;
      transition:0.3s $ease-in-out-circ;
      .logo-parade__cell {
        &:nth-child(2) .logo-parade__logo {
          transition-delay:0.1s;
        }
        &:nth-child(3) .logo-parade__logo {
          transition-delay:0.2s;
        }
        &:nth-child(4) .logo-parade__logo {
          transition-delay:0.3s;
        }
        &:nth-child(5) .logo-parade__logo {
          transition-delay:0.4s;
        }
        &:nth-child(6) .logo-parade__logo {
          transition-delay:0.5s;
        }
        &:nth-child(7) .logo-parade__logo {
          transition-delay:0.6s;
        }
        &:nth-child(8) .logo-parade__logo {
          transition-delay:0.7s;
        }
        &:nth-child(9) .logo-parade__logo {
          transition-delay:0.8s;
        }
      }
      &--not-inview {
        opacity:0;
      }
      &--visible {
        opacity:1;
      }
      &--image {
        &.inview-transition--clip {
          overflow: hidden;
        }
        img {
          transform-origin:top center;
          transition: 2s $ease-out-expo;
        }
        &.inview-transition--not-inview {
          img {
            transform:scale(1.1);
          }
        }
      }
      &--scroll-in {
        @supports (animation-timeline: scroll()) {
          animation: scroll-fade-animate-in $ease-in-out-circ forwards;
          animation-timeline: view();
          animation-range: entry, exit;
          &.inview-transition--visible {
            animation-name:scroll-animate-in
          }
        }
      }
    }
  }

  @keyframes scroll-animate-in {
    0% { 
      //opacity: 0; 
      transform: translateY(4rem); 
    }
    100% { 
      //opacity: 1; 
      transform: translateY(0); 
    }
  }

  @keyframes scroll-fade-animate-in {
    0% { 
      opacity: 0; 
      transform: translateY(4rem); 
    }
    100% { 
      opacity: 1; 
      transform: translateY(0); 
    }
  }

  

</style>
