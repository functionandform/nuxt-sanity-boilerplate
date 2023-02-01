<template>
  <nuxt-link :to="entry.path" class="listed-entry" :class="[{'listed-entry--small':small,'listed-entry--medium':medium,'listed-entry--large':large,'listed-entry--inline':inline, 'listed-entry--inline-md':inlineMd, 'listed-entry--inline-lg':inlineLg}]">
    <figure class="listed-entry__visual">
      
    </figure>
    <div class="listed-entry__caption">
      
    </div>
  </nuxt-link>
</template>


<script setup>
  

  const props = defineProps({
    entry:{type:Object, required:true},
    inline:{type:Boolean},
    inlineMd:{type:Boolean},
    inlineLg:{type:Boolean},
    small:{type:Boolean},
    medium:{type:Boolean},
    large:{type:Boolean},
    hideSummary:{type:Boolean}
  })

</script>


<style lang="scss">

  .listed-entry {
    display:block;
    color:inherit;
    &__visual {
      margin-bottom:vr(1);
      position:relative;
      
      aspect-ratio:16/9;
      overflow: hidden;
      &__logo {
        position:absolute;
        top:50%; left:50%; 
        transform:translate(-50%,-50%);
        width:50%; height:66.66%;
        max-width:30rem;
        display:block;
        object-position: center;
        object-fit: contain;
        
      }
      &__image {
        display:block;
        width:100%;
        object-fit: cover;
        object-position: center;
        & + .listed-entry__visual__logo {
          filter:invert(100%);
        }
      }
      
    }
    &__caption {
      margin-bottom:vr(1);
    }
    &--inline {
      display:flex;
      .listed-entry__caption {
        margin-left:vr(1);
      }
      .listed-entry__summary {
        display:none;
        @include breakpoint(md) {
          display:block;
        }
      }
      .listed-entry__visual {
        aspect-ratio:none;
        align-self:stretch;
        flex:0 0 calc(var(--baseline) * 0.5 + 33.33333333%);
        &__image {
          height:100%;
        }
      }
      // &.listed-entry--small {
      //   .listed-entry {
      //     &__visual {
      //       flex:0 0 33.333333%;
      //       align-self:stretch;
      //       img {
      //         height:100%;
      //       }
      //     }
      //   }
      // }
    }
    &--inline-md {
      @include breakpoint(md) {
        display:flex;
        align-items:center;
        .listed-entry {
          &__caption {
            margin-left:vr(1);
          }
            &__visual {
              aspect-ratio:none;
              flex:0 0 calc(var(--baseline) * 0.5 + 33.33333333%);
              align-self:stretch;
              &__image {
                height:100%;
              }
            }
          }
        &.listed-entry--large {
          .listed-entry {
            &__visual {
              aspect-ratio:none;
              flex:0 0 50%;
              @include breakpoint(lg) {
                flex:0 0 calc(var(--baseline) * 0.5 + 66.66666667%);
              }
            }
          }
        }
      }
    }

  }
</style>