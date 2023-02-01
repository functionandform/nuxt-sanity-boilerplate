<template>
  <footer class="footer">
    <container class="footer__container">
      <row>
          <column xxs="12" md="3">
            <nuxt-link to="/"><logo/></nuxt-link>
          </column>
          <!-- <column xxs="12" md="9" v-if="utilityMenu">
            <div class="footer__columns" :data-qty="utilityMenu.length">
              <div class="footer__group" v-for="(group,groupIndex) in utilityMenu" :key="'group-'+groupIndex">
                <h5>{{group.title}}</h5>
                <div class="footer__group__item" v-for="(item,itemIndex) in group.items" :key="`group-${groupIndex}-item-${itemIndex}`">
                   <div><component :is="getLinkType(item)" :class="item.internalLink ? 'footer__group__item__link' : null" :to="item.internalLink?.path ? item.internalLink.path : null"><span>{{item.title ? item.title : item.internalLink?.title ? item.internalLink?.title : item.internalLink?._type}}<tag v-if="item.tag" invert :tag="item.tag"/></span></component></div>
                  </div>
              </div>
            </div>
          </column> -->
        </row>
    </container>
    <container class="footer__container">
       <p class="caveat">Website by <a href="https://www.functionandform.co.uk">Function & Form</a></p>
      <div class="footer__caveats" id="global-caveats">
       
      </div>
    </container>
  </footer>
</template>

<script setup>

  const year = computed(() => {
      const currentTime = new Date();
      return currentTime.getFullYear();
  })

  const props = defineProps({
    utilityMenu:{required:true,type:Array},
  })

  function getLinkType(item) {
    return item.internalLink ? resolveComponent('NuxtLink') : 'span';
  }

</script>


<style lang="scss">
  .footer {
    width:100%;
    display:block;
    position:relative;
    background-color: var(--bg);
    border-top-left-radius:$radius-lg;
    border-top-right-radius:$radius-lg;
    padding:vr(2) 0;
    margin-top:auto;
    &__columns {
      column-count:2;
      column-gap:vr(1);
        column-fill:balance-all;
      @include breakpoint(lg) {
        column-count:4;
        &[data-qty="1"] {
          column-count:1;
        }
        &[data-qty="2"] {
          column-count:2;
        }
        &[data-qty="3"] {
          column-count:3;
        }
        &[data-qty="4"] {
          column-count:4;
        }
        &[data-qty="5"] {
          column-count:5;
        }
      }
    }
    &__group {
      display:block;
      margin-bottom:vr(1);
      break-inside: avoid-column;
      margin-bottom:vr(1);
      @include breakpoint(lg) {
        margin-bottom:0;
      }
      &__item {
        &:not(:last-of-type) {
          margin-bottom:vr(0.5);
        }
        &__link {
          @include link(true);
        }
      }
    }
  }
</style>