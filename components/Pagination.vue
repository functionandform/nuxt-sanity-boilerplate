<template>
  <nav class="pagination" v-if="count">
    <template v-if="!previousPage && nextPage">
      <v-button
        v-if="nextPage"
        :to="nextPage"
        class="no-margin"
        weight="primary"
        >View more</v-button
      >
    </template>
    <div class="pagination__wrapper" v-else>
      <v-button
        v-if="previousPage"
        :to="previousPage"
        leading-icon="arrow-left"
        class="no-margin"
        >Previous</v-button
      >
      <div class="pagination__info">page {{ page }} of {{ totalPages }}</div>
      <v-button
        v-if="nextPage"
        :to="nextPage"
        :leading-icon="false"
        trailing-icon="arrow-right"
        class="no-margin"
        >Next</v-button
      >
    </div>
  </nav>
</template>

<script setup>
const route = useRoute();
const page = ref(route.params?.page ? parseInt(route.params.page) : 1);

const props = defineProps({
  types: { type: Array, required: true },
  industry: { type: String },
  role: { type: String },
  limit: { type: Number, required: true },
});

const typeString = '["' + props.types.join('","') + '"]';

const countQuery = `count(*[_type in ${typeString}${
  props.industry ? ` && industry->slug.current == "${props.industry}"` : ""
}${props.role ? ` && role->slug.current == "${props.role}"` : ""}])`;

const sanity = useSanity();
const { pending, data: count, error } = await useLazyAsyncData(route.fullPath, () => sanity.fetch(countQuery));

if (error?.value) {
  console.error(error.value);
} else if (count?.value) {
} else {
  console.warn("No entries");
}

const totalPages = computed(() => {
  const calcPages = count.value / props.limit;
  return Math.ceil(calcPages);
});

const previousPage = computed(() => {
  if (page.value > 1) {
    const newPath = route.path.includes("/page")
      ? route.path.replace(`page/${page.value}`, `page/${page.value - 1}`)
      : `${route.path.replace(/\/$/, "")}/page/${page.value - 1}`;
    return { path: newPath, query: route.query };
  } else {
    return null;
  }
});

const nextPage = computed(() => {
  if (page.value < totalPages.value) {
    const newPath = route.path.includes("/page")
      ? route.path.replace(`page/${page.value}`, `page/${page.value + 1}`)
      : `${route.path.replace(/\/$/, "")}/page/${page.value + 1}`;
    return { path: newPath, query: route.query };
  } else {
    return null;
  }
});
</script>

<style lang="scss">
.pagination {
  margin-bottom: vr(1);
  display: flex;
  align-items: center;
  justify-content: center;
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__info {
    margin: 0 vr(1);
  }
}
</style>
