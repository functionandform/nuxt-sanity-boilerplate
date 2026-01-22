<template>
  <div class="accordion" :class="{ 'accordion--minimal': minimal,'accordion--box':box }">
    <slot></slot>
  </div>
</template>

<script setup>
import { provide } from "vue";

const accordion = ref({ count: 0, active: -1 });

const props = defineProps({
  minimal: { type: Boolean },
  box:{type:Boolean}
});

provide("accordion", accordion);
</script>

<style lang="scss">
.accordion {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom:vr(1);
  &__item {
  
    &__header {
      position: relative;
      padding: vr(0.5) vr(1);
      display: flex;
      align-items: center;
      justify-content: space-between;
      & > * {
        margin-bottom: 0 !important;
        margin-right:vr(0.5);
      }
      &__icon {
        transform: rotate(0deg);
        height: vr(1);
        width: vr(1);
        transform-origin: center;
        display: block;
        position: relative;
        color: var(--accent);
        transition: 0.3s $ease-in-out-expo;
        transform-origin:center;
        &::before, &::after {
          transform-origin:center;
          position:absolute;
          top:calc(50% - 1px);
          left:50%;
          margin-left:vr(-0.2);
          height:2px; width:1rem;
          background-color:currentColor;
          content:"";
          transition:0.4s $ease-in-out-expo;
        }
        &::after {
        }
        &::before {
          transform: rotate(90deg);
        }
      }
    }
    &__title {
      flex: 0 1 100%;
      min-width: 0;
    }
    &__content {
      position: relative;
      padding-right:vr(1);
      &__inner {
        position: relative;
        padding:0 vr(1);
        &::after, &::before {
          position: relative;
          display: block;
          height: vr(0.5);
          content: " ";
          clear: both;
        }
      }
    }
    &:not(.accordion__item--active) {
      .accordion__content {
        height: 0;
      }
    }
    &--active {
      .accordion__item {
        &__header {
          &__icon {
            transform: rotate(45deg);
          }
        }
      }
    }
  }
  &--box {
    border:$border;
    .accordion {
      &__item {
        border-top:none;
        border-bottom:$border;
        padding:0 vr(0.75) 0 vr(1);
        &:last-child {
          border-bottom:0;
        }
      }
    }
  }
  &--minimal {
    .accordion {
      &__item {
        border-top: none;
        border-bottom: none;
        &__content {
          &__inner {
            padding: 0;
          }
        }
        &__header {
          flex-direction: row-reverse;
          justify-content: flex-start;
          padding: vr(0.25) 0;
          &__icon {
            margin: 0;
            color: var(--accent);
          }
        }
      }
    }
  }
}
</style>
