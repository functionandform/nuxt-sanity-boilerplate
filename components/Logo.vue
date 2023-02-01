<template>
  <div class="logo">
    <!-- <img src="/brand/logo-icon.svg" alt="Logo icon" width="72" height="72" class="logo__icon" loading="lazy">
    <img src="/brand/logo-type.svg" alt="Cool Planet" width="286" height="72" class="logo__type" loading="lazy"> -->
  </div>
</template>


<script setup>
  

</script>


<style lang="scss">
  .logo {
    display:flex;
    margin-bottom:vr(1);
    align-items: center;
    height:2rem;
    @include breakpoint(lg) {
      height:2.5rem;
    }
    &__type, &__icon {
      width:auto;
      height:100%;
    }
    &__type {
      margin-left:0.5rem;
    }
    &.no-margin {
      margin-bottom:0;
    }
  }
</style>