<template>
  <div class="app" id="app">
    <main class="app__main">
      <nuxtLayout>
        <NuxtPage />
      </nuxtLayout>
    </main>
  </div>
</template>


<script setup>
// import { useMenuStore } from "~/stores";
// import { useModalStore } from "~/stores";
// import { storeToRefs } from "pinia";

// const { menuIsOpen } = storeToRefs(useMenuStore());
// import "vue3-lottie/dist/style.css";
import groqQuery from "~/queries/groq/globals";
const config = useRuntimeConfig();
const route = useRoute();

// const query = groqQuery();
// const sanity = useSanity();


// const { data: globals, error } = await useLazyAsyncData("globals", () =>
//   sanity.fetch(query)
// );

// if (error && error.value) {
//   throw createError({ statusCode: 500 });
// } else if (globals) {
//   const seo = globals.value?.seo ? globals.value.seo : {};

//     const seeAlso = [].concat(seo?.socialMedia?.sameAsUrls || []);
//     let seeAlsoJustUrls = [];
//     if (seeAlso && seeAlso.length) {
//       seeAlso.forEach((item) => {
//         seeAlsoJustUrls.push(item.url);
//         meta.push({ property: "og:see_also", content: item.url });
//       });
//     }


//     const entityImage = seo?.entity?.entityBrand;
//     useSchemaOrg([
//       defineOrganization({
//         description: seo?.meta?.description,
//         name: seo?.meta?.title,
//         alternateName: seo?.entity?.alternateEntityName
//           ? seo?.entity?.alternateEntityName
//           : config.public.siteName,
//         description: seo?.entity?.entityDescription
//           ? seo?.entity?.entityDescription
//           : seo?.meta?.description,
//         email: seo?.entity?.entityEmail ? seo?.entity?.entityEmail : "",
//         logo: entityImage?.url,
//         sameAs: seeAlsoJustUrls ?? seeAlsoJustUrls.length ? seeAlsoJustUrls : [],
//         telephone: seo?.entity?.entityTelephone
//           ? seo?.entity?.entityTelephone
//           : "",
//         url: seo?.entity?.entityUrl
//           ? seo?.entity?.entityUrl
//           : config.public.baseUrl,
//       }),
//     defineWebSite({/* ... */}),
//       defineWebPage(),
//     ])
// }


</script>

<style lang="scss">

.page-left-enter-active,
.page-right-enter-active,
.page-left-leave-active,
.page-right-leave-active {
  transition: 0.3s $ease-in-out-circ;
}

.page-left-enter-active, .page-right-enter-active {
  transition:0.3s $ease-in-out-circ;
}
.page-left-enter-from,
.page-right-leave-to {
  transform: translateY(2rem);
  opacity: 0;
}
.page-left-leave-to,
.page-right-enter-from {
  transform: translateY(-2rem);
  opacity: 0;
}
.page-left-enter-to,
.page-right-enter-to {
  transform: translateY(0);
  transition-delay: 0.3s;
}
</style>
