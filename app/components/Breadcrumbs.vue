<template>
  <nav class="breadcrumbs" vocab="http://schema.org/" typeof="BreadcrumbList">
    <breadcrumb position="1" name="Home">
      <nuxt-link property="item" typeof="WebPage" to="/" name="Home" title="home" class="cursor-home">
        <icon name="home"/>
      </nuxt-link>
    </breadcrumb>
    <slot></slot>
  </nav>
</template>

<script setup>
  // import { provide } from "vue";

  // const breadcrumbs = ref({ count: 1 });

  const props = defineProps({
    minimal: { type: Boolean },
  });

  // provide("breadcrumbs", breadcrumbs);

</script>

<style lang="scss">
  .breadcrumbs {
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  text-overflow: ellipsis;
  width: 100%;
  max-width: 100%;
  &.no-margin {
    margin-bottom: 0;
  }
  &__crumb {
    display: inline;
    white-space: nowrap;
    text-overflow: ellipsis;
    vertical-align: middle;
    font-size: 0.7rem;
    overflow: hidden;
    text-transform:uppercase;
    font-weight:700;
    letter-spacing: 0em;
    color:var(--accent);
    @include breakpoint(lg) {
      font-size:0.7rem;
      letter-spacing: 0.15em;
    }
    @include breakpoint(xl) {
      font-size:0.6rem;
    }
    .icon {
      width:0.8rem; height:0.8rem;
    }
    // .icon {
    //   color:var(--accent);
    // }
    // @include breakpoint(md) {
    //   font-size:0.9rem;
    // }
    a:link,
    a:visited {
      @include link(true);
      color:var(--contrast);
    }
    &:not(:first-child) {
      margin-left: 0.2em;
    }
    &:not(:last-child) {
      margin-right: 0.2em;
      &::after {
        @include chev("right", 0.5em, var(--contrast-soft));
        content: "";
        display: inline-block;
        margin: 1px 0.25em 0 0.25em;
        margin-top: 0;
        vertical-align: middle;
        @include breakpoint(lg) {
          margin:0 0.5em 0 0.5em;
        }
      }
    }
  }
}
</style>
