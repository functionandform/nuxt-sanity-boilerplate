<template>
  <component :is="applyInviewTransition ? InviewTransition : 'div'"
    class="accordion__item"
    :class="{ 'accordion__item--active': visible }"
  >
    <div
      class="accordion__item__header"
      @click="open"
      :class="{ 'cursor-remove': visible, 'cursor-add': !visible }"
    >
      <div class="accordion__item__title"><slot name="title"></slot></div>
      <div class="accordion__item__header__icon"></div>
    </div>

    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div class="accordion__item__content" v-show="visible" v-cloak>
        <div class="accordion__item__content__inner">
          <slot name="content"></slot>
        </div>
      </div>
    </transition>
  </component>
</template>

<script setup>
import { inject, onBeforeMount } from "vue";
import InviewTransition from './InviewTransition.vue';
const props = defineProps({
  minimal: { type: Boolean },
  alignScrollWhenOpen: {type:Boolean},
  applyInviewTransition: {type:Boolean,default:true}
});
const emit = defineEmits(["update:open","interface:open"]);

const index = ref(null);

const accordion = inject("accordion");

const visible = computed(() => {
  return index.value === accordion.value.active;
});

function open() {
  if (visible.value) {
    accordion.value.active = null;
  } else {
    accordion.value.active = index.value;
  }
  emit("update:open", visible.value, visible.value);
}

function start(el) {
  el.style.height = el.scrollHeight + "px";
}

function end(el) {
  el.style.height = "";
  if (props.alignScrollWhenOpen) {
    const overflow = document.getElementById('appOverflow');
    if (overflow) {
      const parent = el.closest('.accordion__item--active');
      if (parent) {
        parent.scrollIntoView();
      } 
    }
  }

}

onBeforeMount(() => {
  index.value = accordion.value.count++;
});

onMounted(() => {
  emit("interface:open", open);
});
</script>

<style lang="scss">
.accordion-enter-active {
  transition: transform 0.3s $ease-in-out-circ 0.3s,
    height 0.3s $ease-in-out-circ, opacity 0.3s $ease-in-out-circ 0.3s;
  overflow: hidden;
}

.accordion-leave-active {
  transition: transform 0.3s $ease-in-out-circ 0s,
    height 0.3s $ease-in-out-circ 0s, opacity 0.2s $ease-in-out-circ 0s;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
  transform: rotate3d(1, 0, 0, -10deg) scale(0.9);
  transform-origin: center top;
}
</style>
