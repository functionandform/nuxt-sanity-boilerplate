<template>
  <component :is="getComponentType" class="icon-label"><icon :name="name" class="icon-label__icon"/><span class="icon-label__label"><slot/></span></component>
</template>

<script setup>

  const props = defineProps({
    type:{
      required:false,
      default:'div'
    },
    name:{
      required:false
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
</script>


<style lang="scss">
  .icon-label {
    -webkit-appearance: none;
    white-space: nowrap;
    background-color:transparent;
    border:none;
    border-radius:0px;
    padding:0;
    position:relative;
    white-space:nowrap;
    display: inline-table;
    vertical-align: middle;
    font-size:1rem;
    &__label, &__icon {
      position:relative;
      display:table-cell;
      vertical-align: middle;
      pointer-events:none;
      color:currentColor;
      height:vr(1); width:vr(1);
      position:relative;
      margin-right:vr(0.5);
      .icon {
        display:block;
        height:vr(1); width:vr(1);
        color:currentColor;
        position:absolute;
        top:50%; left:50%;
        transform:translate(-50%,-50%);
      }
    }
  }
</style>