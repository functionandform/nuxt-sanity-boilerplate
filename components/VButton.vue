<template>
  <component :is="getComponentType"
    :type="type ? type : getComponentType === 'button' ? 'button' : null"
    :to="to"
    :href="url ? url : to ? to : null"
    :exact="to && exact ? exact : null"
    :class="[
      'button button--loading button--' + weight + ' ' + addClass + ' ' + applyInvertClass + ' button--loading-' + loading, {'button--small':small, 'button--active':active}]"
    ref="button"
    :active-class="activeClass"
  >
    <div class="button__fill"></div>
    <div class="button__doodle"></div>

    <div class="button__loading-icon" v-if="loading"><span></span><span></span><span></span></div><div class="button__icon button__icon--leading" v-if="leadingIcon"><icon :name="leadingIcon" size="normal"></icon></div><span class="button__label" ref="label"><slot></slot></span><span class="button__meta" v-if="meta || typeof meta == 'number'">&nbsp;{{meta}}</span><div class="button__icon button__icon--trailing" v-if="trailingIcon"><icon :name="trailingIcon" size="normal"></icon></div>
    <div class="button__click-handler" @click="onClick()"></div>
  </component>
</template>

<script>

  

export default {
  props: {
    weight: {
      required: false,
      type: String,
      default:'tertiary'
    },
    trailingIcon: {
      required:false
    },
    leadingIcon: {
      default:false
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
  },
  computed: {
    applyInvertClass() {
      if (this.invert) {
        return 'button--invert';
      } else {
        return null;
      }
    },
    applyLoadingClass() {
      if (this.loading) {
        return 'button--loading';
      } else {
        return null;
      }
    },
    getComponentType() {
      if (this.to) {
        return 'nuxt-link'
      } else if (this.url) {
        return 'a'
      } else {
        return 'button'
      }
    },
  },
  methods: {
    
    applyWeightClass() {
      return `button--$(this.weight)`;
    },
    onClick() {
      const ctx = this;
      const label = this.$refs.label ? this.$refs.label.innerHTML.replace(/<[^>]*>?/gm, '') : null;
      if (this.dataLayerEnabled && this.type !== 'radio' && this.type !== 'checkbox') {
        let baseVariables = {
          event:this.event,
          ctaWeight:ctx.weight,
          locationPath:ctx.$route.fullPath,
          ctaLabel:label
        }
        if (ctx.action && ctx.action.length) {
          baseVariables.action = ctx.action
        } else if (ctx.to && ctx.to.length && ctx.to.startsWith('/forms/')) {
          const slug = ctx.to.split("/").pop();
          //baseVariables.event = 'formAction';
          baseVariables.action = 'viewForm';
          baseVariables.form = slug;
        }
        if (ctx.to && ctx.to.length) {
          baseVariables.destinationPath = ctx.to
        } else if (ctx.url && ctx.url.length) {
          baseVariables.externalUrl = ctx.url
        }
        if (ctx.location && ctx.location.length) {
          baseVariables.location = ctx.location
        }
        if (ctx.dataLayerVariables) {
          baseVariables = {...baseVariables, ...ctx.dataLayerVariables}
        }
        ctx.pushDataLayer(baseVariables);
      }
    },
  },
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
  position:relative;
  white-space:nowrap;
  display: inline-table;
  vertical-align: middle;
  margin-bottom:vr(1);
  height:vr(1);
  min-height:vr(1);
  font-size:1rem;
  color:black;
  letter-spacing:0.015em;
  color:black;
  font-weight:600;
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
    height:100%;
    pointer-events:none;
  }
  &__label {
    transition:0.2s $ease-in-out-expo;
  }
  &__meta {
    color:black;
    font-size:0.8em;
    font-weight:400;
    
  }
  &__icon {
    height:auto;
    position:relative;
    margin:0 vr(0.25);
    .icon {
      display:block;
      color:black;
      transition:0.2s $ease-in-out-expo;
    }
    
  }
  &__fill {
    pointer-events:none;
    background-color: transparent;
    height:100%; width:100%;
    position:absolute;
    top:50%; left:0;
    max-height:100%;
    transform:translateY(-50%);
  }
  &--tertiary {
    font-size:0.8rem;
    &:focus {
      outline:none;
    }
  }
  &--primary, &--category {
    text-align:center;
    background-color:transparent;
    .button {
      &__icon, &__label {
        margin:0 vr(0.25);
      }
      &__label {
        color:white;

      }
      &__fill {
        background-color: black;
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
  &--primary {
    padding:0 vr(0.75);
    height:vr(2);
    max-height:vr(2);
  }
  &--category {
    padding:0 vr(0.5);
    height:vr(1);
    max-height:vr(1);
    .button__label {
      font-size:0.8rem;
    }
  }
  
  &--disabled, &:disabled {
    pointer-events:none;
    cursor:not-allowed;
  }
  &--invert {
    &.button--primary, &.button--category {
      .button__fill {
        background-color: white;
      }
      .button__label {
        color:black;
      }
    }
    &.button--secondary, &.button--tertiary {
      .button__label {
        color:white;
      }
    }
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
  .button__doodle {
      opacity:1;
      transition:0.1s $ease-in-circ;
    }
}


</style>
