<template>
  <transition appear name="fade">
    <div
      class="loading"
      :class="{ 'loading--full-page': fullPage, 'loading--small': small }"
    >
      <div class="loading__icon">
        <!-- <Vue3Lottie :animationData="loadingSrc" :height="48" :width="48" /> -->
      </div>
    </div>
  </transition>
</template>

<script>
// import LoadingData from "~/assets/lottie/loading.json";

export default {
  data() {
    return {
      loadingSrc: LoadingData,
    };
  },
  props: {
    dialogue: {
      required: false,
      type: String,
    },
    fullPage: {
      required: false,
      type: Boolean,
    },
    small: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss">
.loading {
  margin-top: 25vh;
  position: relative;
  height: vr(2);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 100;
  &--full-page {
    position: absolute;
    top: 0;
    left: 0;
  }
  &__icon {
    width: vr(1.5);
    height: vr(1.5);
    display: block;
    margin: 0 auto vr(1) auto;
    @include breakpoint(lg) {
      width: vr(2);
      height: vr(2);
    }
  }
  .loading-transition-enter-active,
  .loading-transition-leave-active {
    transition: transform 0.5s $ease-in-out-expo 0s,
      opacity 0.5s $ease-in-out-expo;
    transform: scale(1);
    opacity: 1;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }

  .loading-transition-enter,
  .loading-transition-leave-to {
    //transition:5s $ease-in-out-expo;
    transform: scale(0.8);
    opacity: 0;
  }
  &--small {
    height: vr(1);
    margin: 0 auto;
    .loading__icon {
      height: vr(1);
      width: vr(1);
    }
  }
}
</style>
