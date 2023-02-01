<template>
  <div class="index">
    <loading v-if="pending" />
    <template v-else-if="entry">

    </template>
  </div>
</template>

<script setup>
import { entryMeta } from "~/helpers";
import groqQuery from "~/queries/groq/home-page";
const config = useRuntimeConfig();
const query = groqQuery();

const sanity = useSanity();
const {
  pending,
  data: entry,
  error,
} = await useLazyAsyncData("index", () => sanity.fetch(query));
if (error?.value) {
  throw createError({ statusCode: 500 });
} else if (entry?.value) {
  const meta = entryMeta(entry.value);
  useHead({
    title: entry.value?.meta?.title,
    meta: meta,
    link: [{ rel: "canonical", href: `${config.public.baseUrl}` }],
  });
}
</script>
