<template>
  <component :is="getComponentType"
    :type="type ? type : getComponentType === 'button' ? 'button' : null"
    :to="to"
    :href="url"
    :exact="to && exact ? exact : null"
    :class="[
      'button button--' + weight + ' ' + addClass+' ', {'button--small':small, 'button--active':active}]"
    ref="button"
    :active-class="activeClass"
  ><div class="button__fill"></div><div class="button__icon-fill"></div><div class="button__loading-icon" v-if="loading"><span></span><span></span><span></span></div><div class="button__icon button__icon--leading" v-if="leadingIcon"><icon :name="leadingIcon" size="normal"></icon></div><span class="button__label" ref="label"><slot/></span><span class="button__meta" v-if="meta || typeof meta == 'number'">&nbsp;{{meta}}</span><div class="button__icon button__icon--trailing" v-if="trailingIcon"><icon :name="trailingIcon" size="normal"></icon></div><div class="button__click-handler" @click="onClick(e)"></div></component>
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

  const labelHtml = computed(() => {
    const labelSlot = slots.default();
    const label = labelSlot[0]?.children;
    console.log(label);
    const chars = label.split('');
    return '<span>'+ chars.join('</span><span>') + '</span>';
  });

  const applyInvertClass = computed(() => {
    if (props.invert) {
      return 'button--invert';
    } else {
      return null;
    }
  });
  const applyLoadingClass = computed(() => {
    if (props.loading) {
      return 'button--loading';
    } else {
      return null;
    }
  });
  const getComponentType = computed(() => {
    if (props.to) {
      return resolveComponent('NuxtLink')
    } else if (props.url) {
      return 'a'
    } else {
      return 'button'
    }
  });

  function applyWeightClass() {
    return `button--${props.weight}`;
  };
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
  letter-spacing: 0.015em;
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
  }
  &__label {
    transition:0.2s $ease-in-out-expo;
    z-index: 1;
    color:currentColor;
  }
  &__meta {
    color:currentColor;
    font-size:0.8em;
    
  }
  &__icon {
    position:relative;
    .icon {
      display:block;
      position:absolute;
      top:50%; left:50%;
      transform:translate(-50%,-50%);
      transition:0.2s $ease-in-out-expo;
    }
  }
  &__fill {
    pointer-events:none;
    background-color: transparent;
    width:100%;
    height:vr(1);
    position:absolute;
    top:50%; left:0;
    transform-origin:center left;
    max-height:100%;
    transform:translateY(-50%);
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
     &__icon-fill {
      height:2rem; max-width:2rem;
     }
      &__label {
        margin:0 1rem;
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
