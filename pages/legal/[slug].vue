<template>
  <div>
    <loading v-if="pending" />
    <template v-else-if="entry">
      <section class="section">
        <container>
          <h1 class="h4 tag" v-if="entry.headline">{{ entry.title }}</h1>
          <component :is="entry.headline ? 'h2' : 'h1'" class="h1">{{
            entry.headline ? entry.headline : entry.title
          }}</component>
        </container>
      </section>
      <section class="section">
        <container>
          <row>
            <column xs="12" lg="8">
              <article>
                <section v-for="(section, i) in entry.terms" :key="'term-' + i">
                  <h2 :id="`section-${i + 1}`">{{ section.title }}</h2>
                  <sanity-content :blocks="section.body" />
                </section>
              </article>
            </column>
            <column xs="12" lg="4">
              <div class="sticky-col">
                <p
                  v-for="(section, i) in entry.terms"
                  :key="`sectionLink-${i}`"
                >
                  <nuxt-link
                    :to="{ hash: `#section-${i + 1}` }"
                    class="legal-nav__item"
                    :data-index="i"
                    :class="{
                      'legal-nav__item--active': currentSectionIndex === i,
                    }"
                  >
                    {{ section.title }}
                  </nuxt-link>
                </p>
              </div>
            </column>
          </row>
        </container>
      </section>
    </template>
  </div>
</template>

<script setup>
import { entryMeta } from "~/helpers";
import groqQuery from "~/queries/groq/legal-page";
const config = useRuntimeConfig();
const route = useRoute();
const query = groqQuery(route.params.slug);

const sanity = useSanity();
const {
  pending,
  data: entry,
  error,
} = await useLazyAsyncData(route.fullPath, () => sanity.fetch(query));
if (error?.value) {
  throw createError({ statusCode: 500 });
} else if (!error?.value && !pending?.value && !entry?.value) {
  throw createError({ statusCode: 404 });
} else if (entry?.value) {
  const meta = entryMeta(entry.value);
  useHead({
    title: entry.value?.meta?.title,
    meta: meta,
    link: [
      {
        rel: "canonical",
        href: `${config.public.baseUrl}/legal/${route.params.slug}`,
      },
    ],
  });
}
</script>
