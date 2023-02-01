<template>
  <component :is="getComponentType"
    :type="type ? type : getComponentType === 'button' ? 'button' : null"
    :to="to"
    :target="url || (to?.length && to.includes('http')) ? '_blank' : null"
    :href="url"
    :exact="to && exact ? exact : null"
    :class="[
      'button button--' + weight + ' ' + addClass+' ', {'button--small':small, 'button--active':active, 'button--invert':invert, 'button--trailing-icon':trailingIcon}]"
    ref="button"
    :active-class="activeClass"
    :aria-label="slots.default()[0]?.children.toString()"
  ><div class="button__fill"></div><div class="button__icon-fill"></div><div class="button__icon button__icon--leading" v-if="!trailingIcon && (leadingIcon || loading)"><div class="button__loading-icon" v-if="loading"><svg preserveAspectRatio="none" viewbox="0 0 16 16"><circle cx="8" cy="8"  fill="none" stroke-width="4" r="6"/></svg></div><icon v-else="leadingIcon" :name="leadingIcon" size="normal"/></div><span class="button__label" ref="label"><slot/></span><span class="button__meta" v-if="meta || typeof meta == 'number'">&nbsp;{{meta}}</span><div class="button__icon button__icon--trailing" v-if="trailingIcon"><icon :name="trailingIcon" size="normal"/></div><div class="button__click-handler" @click="onClick(e)"></div></component>
</template>

<script setup>
  import { ref, computed, useSlots } from 'vue';
  const slots = useSlots();
  const route = useRoute();
  const button = ref(null);
  const label = ref(null);

  const props = defineProps({
    weight: {
      required: false,
      type: String,
      default:'tertiary'
    },
    trailingIcon: {
      default:false
    },
    leadingIcon: {
      default:'arrow-right'
    },
    activeClass:{
      type:String
    },
    active: {
      type:Boolean
    },
    exact: {
      type:Boolean,
      default:false
    },
    to: {
      required:false
    },
    url: {
      required:false
    },
    location: {
      type:String
    },
    type: {
      required: false,
      type: String,
    },
    event: {
      type:String,
      default:'ctaAction'
    },
    meta: {
      required: false,
      type: String,
    },
    small: {
      type:Boolean
    },
    invert: {
      required: false,
      type: Boolean,
    },
    addClass: {
      required: false,
      type: String,
      default: '',
    },
    loading: {
      required:false,
      type:Boolean,
      default:false
    },
    dataLayerEnabled: {
      type:Boolean,
      default:true
    }
  });


  const getComponentType = computed(() => {
    if (props.type === 'div') {
      return 'div'
    } else if (props.to) {
      return resolveComponent('NuxtLink')
    } else if (props.url) {
      return 'a'
    } else {
      return 'button'
    }
  });

  function onClick(e) {
    // const label = label.value ? label.value.innerHTML.replace(/<[^>]*>?/gm, '') : null;
    // if (this.dataLayerEnabled && this.type !== 'radio' && this.type !== 'checkbox') {
    //   let baseVariables = {
    //     event:e,
    //     ctaWeight:props.weight,
    //     locationPath:route.fullPath,
    //     ctaLabel:label
    //   }
    //   if (props.action && props.action.length) {
    //     baseVariables.action = props.action
    //   } else if (props.to && props.to.length && props.to.startsWith('/forms/')) {
    //     const slug = props.to.split("/").pop();
    //     baseVariables.action = 'viewForm';
    //     baseVariables.form = slug;
    //   }
    //   if (props.to && props.to.length) {
    //     baseVariables.destinationPath = props.to
    //   } else if (props.url && props.url.length) {
    //     baseVariables.externalUrl = props.url
    //   }
    //   if (props.location && props.location.length) {
    //     baseVariables.location = props.location
    //   }
    //   if (props.dataLayerVariables) {
    //     baseVariables = {...baseVariables, ...props.dataLayerVariables}
    //   }
    //   // ctx.pushDataLayer(baseVariables);
    // }
  }
</script>




<style lang="scss">
  .button {
  -webkit-appearance: none;
  display:inline-block;
  white-space: nowrap;
  background-color:transparent;
  border:none;
  border-radius:0px;
  padding:0;
  position:relative;
  white-space:nowrap;
  display: inline-table;
  vertical-align: middle;
  margin-bottom:vr(1);
  height:vr(1);
  min-height:vr(1);
  font-size:1rem;
  color:var(--primary);
  font-weight:700;
  font-family:$body-font-family;
  cursor:pointer;
  &__click-handler {
    position:absolute;
    top:0; left:0;
    width:100%; height:100%;
    display:block;
    background-color:transparent;
  }
  &__label, &__icon, &__meta {
    position:relative;
    display:table-cell;
    vertical-align: middle;
    pointer-events:none;
    color:currentColor;
  }
  &__label {
    transition:0.2s $ease-in-out-expo;
    z-index: 1;
    padding-right:0.5rem;
  }
  &--trailing-icon {
    .button__label {
      padding-left:0.5rem;
      padding-right:0.5rem;
    }
  }
  &__meta {
    font-size:0.8em;
    
  }
  &__icon {
    height:vr(1); width:vr(1);
    position:relative;
    .icon {
      display:block;
      position:absolute;
      top:50%; left:50%;
      transform:translate(-50%,-50%);
      transition:0.2s $ease-in-out-expo;
    }
    & ~ .button__label {
      padding-left:0.5em;
    }
  }
  &__fill,  {
    pointer-events:none;
    background-color: transparent;
    width:100%;
    height:vr(1);
    position:absolute;
    top:50%; left:0;
    transform-origin:center left;
    max-height:100%;
    transform:translateY(-50%);
    border-radius:$radius-sm;
  }
  &--primary, &--category, &--secondary {
    text-align:center;
    background-color:transparent;
    height:vr(2);
    max-height:vr(2);
    .button {
     &__icon {
      height:2rem; width:2rem;
      
     }
      &__label {
        margin:0 1rem;
        
      }
      &__fill {
        height:2rem;
        background-color: currentColor;
      }
    }
    .icon {
      margin:0 auto;
    }
    &:focus {
      outline:none;
      .button__fill {
        box-shadow:0 0 0px 2px blue;
      }
    }
  }
  
  &--disabled, &:disabled {
    pointer-events:none;
    cursor:not-allowed;
  }
  &--invert {
    
    
  }
  &--small {
    &.button--primary {
      height:vr(1.5);
      padding:0 vr(0.5);
      max-height:vr(1.5);
    }
  }

}

a:hover, .button:hover, .button.button--active {
  
}

.button.no-margin {
  margin-bottom:0;
}


</style>
