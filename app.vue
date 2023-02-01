<template>
  <background />
  <promo-header-banner
    v-if="globals?.headerBanner?.promo"
    :banner="globals?.headerBanner"
  />
  <header-nav
    :cta="globals?.navigation?.cta"
    :megaMenu="globals?.navigation?.megaMenu"
  ></header-nav>
  <div class="app" :class="{ 'app--modal-open': menuIsOpen || modalIsOpen }">
    <main class="app__main default">
      <nuxtLayout>
        <NuxtPage />
      </nuxtLayout>
    </main>
  </div>
  <main-footer
    v-if="globals?.navigation?.utilityMenu"
    :utility-menu="globals.navigation.utilityMenu"
  />
  <cookie-consent />
</template>

<script setup>
  import { useThemeStore, useMenuStore, useModalStore } from "~/stores";
  import { storeToRefs } from "pinia";

  const { darkMode } = storeToRefs(useThemeStore());
  const { menuIsOpen } = storeToRefs(useMenuStore());
  const { modalIsOpen } = storeToRefs(useModalStore());

  import "vue3-lottie/dist/style.css";
  import groqQuery from "~/queries/groq/globals";
  const query = groqQuery();
  const route = useRoute();
  const config = useRuntimeConfig();
  const sanity = useSanity();
  const {
    pending,
    data: globals,
    error,
  } = await useAsyncData("globals", () => sanity.fetch(query));

  if (error && error.value) {
    throw createError({ statusCode: 500 });
  } else if (globals) {
    const seo = globals.value?.seo ? globals.value.seo : {};

    let meta = [];
    let link = [];
    meta.push(
      { name: "description", content: seo?.meta?.description },
      { name: "robots", content: seo?.meta?.robots ? seo?.meta?.robots : "all" },
      // {name:'referrer',content:'no-referrer-when-downgrade'},
      { property: "og:title", content: seo?.meta?.title },
      { property: "og:locale", content: "en_GB" },
      { property: "og:site_name", content: config.public.siteName },
      { property: "og:type", content: "website" },
      { property: "og:url", content: config.public.baseUrl }
    );
    const socialMedia = seo?.socialMedia;
    if (socialMedia?.twitterHandle) {
      meta.push(
        { name: "twitter:title", content: seo?.meta?.title },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:description", content: seo?.meta?.description }
      );
    }

    const ogImage = seo?.meta?.ogImage;
    if (ogImage) {
      const params = "?h=800&w=1200&fit=crop&fm=jpg&q=80";
      meta.push(
        { property: "og:image", content: ogImage.url + params },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "800" },
        { name: "twitter:image", content: ogImage.url + params },
        { property: "twitter:image:width", content: "1200" },
        { property: "twitter:image:height", content: "800" }
      );
    }
    const seeAlso = [].concat(seo?.socialMedia?.sameAsUrls || []);
    let seeAlsoJustUrls = [];
    if (seeAlso && seeAlso.length) {
      seeAlso.forEach((item) => {
        seeAlsoJustUrls.push(item.url);
        meta.push({ property: "og:see_also", content: item.url });
      });
    }

    link.push(
      { rel: "canonical", href: config.public.baseUrl },
      { rel: "home", href: config.public.baseUrl }
    );

    const entityImage = seo?.entity?.entityBrand;
    useJsonld(() => [
      {
        "@context": "http://schema.org",
        "@type": "ProfessionalService",
        description: seo?.meta?.description,
        // "image":{"@type":"ImageObject",
        //  "url":"https://cdn.thewriter.com/seo/_1200x630_crop_center-center_82_none/seo-image-default-blue.jpg?mtime=1643903554"
        // },
        mainEntityOfPage: config.public.baseUrl,
        name: seo?.meta?.title,
        url: config.public.baseUrl,
      },
      {
        "@context": "http://schema.org",
        "@id": `${
          seo?.entity?.entityUrl ? seo?.entity?.entityUrl : config.public.baseUrl
        }#identity`,
        "@type": "ProfessionalService",
        // "address":{
        //  "@type":"PostalAddress",
        //  "addressCountry":"United Kingdom",
        //  "addressLocality":"London",
        //  "addressRegion":"England",
        //  "postalCode":"SE1 1XF",
        //  "streetAddress":"72 Borough High Street"
        // },
        alternateName: seo?.entity?.alternateEntityName
          ? seo?.entity?.alternateEntityName
          : config.public.siteName,
        description: seo?.entity?.entityDescription
          ? seo?.entity?.entityDescription
          : seo?.meta?.description,
        email: seo?.entity?.entityEmail ? seo?.entity?.entityEmail : "",
        image: {
          "@type": "ImageObject",
          height: entityImage?.width,
          url: entityImage?.url,
          width: entityImage?.height,
        },
        logo: {
          "@type": "ImageObject",
          url: entityImage?.url,
          width: entityImage?.width,
          heiht: entityImage?.height,
        },
        name: seo?.entity?.entityName
          ? seo?.entity?.entityName
          : config.public.siteName,
        //"priceRange":"$$$",
        sameAs: seeAlsoJustUrls ?? seeAlsoJustUrls.length ? seeAlsoJustUrls : [],
        telephone: seo?.entity?.entityTelephone
          ? seo?.entity?.entityTelephone
          : "",
        url: seo?.entity?.entityUrl
          ? seo?.entity?.entityUrl
          : config.public.baseUrl,
      },
      {
        "@context": "http://schema.org",
        "@id": "https://www.functionandform.co.uk#creator",
        "@type": "Organization",
        address: {
          "@type": "PostalAddress",
          addressCountry: "United Kingdom",
          addressLocality: "London",
          addressRegion: "England",
          postalCode: "N1 7LJ",
          streetAddress: "8 Shepherdess Place",
        },
        alternateName: "Function & Form",
        description:
          "Digital creative agency specialising in web design, development and branding.",
        email: "hello@functionandform.co.uk",
        image: {
          "@type": "ImageObject",
          height: "192",
          url: "https://www.functionandform.co.uk/brand/functionandform-logo.png",
          width: "616",
        },
        logo: {
          "@type": "ImageObject",
          height: "192",
          url: "https://www.functionandform.co.uk/brand/functionandform-logo.png",
          width: "616",
        },
        name: "Function & Form",
        url: "https://www.functionandform.co.uk",
      },
      {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        description: "Breadcrumbs list",
        itemListElement: [
          {
            "@type": "ListItem",
            item: "https://www.thewriter.com",
            name: "Writing | Training | Naming | Tone of voice",
            position: 1,
          },
        ],
        name: "Breadcrumbs",
      },
      {
        siteType: "Organization",
        siteSubType: "LocalBusiness",
        siteSpecificType: "ProfessionalService",
        computedType: "ProfessionalService",
        genericName: seo?.entity?.entityName
          ? seo?.entity?.entityName
          : config.public.siteName,
        genericAlternateName: seo?.entity?.alternateEntityName
          ? seo?.entity?.alternateEntityName
          : config.public.siteName,
        genericDescription: seo?.entity?.entityDescription
          ? seo?.entity?.entityDescription
          : seo?.meta?.description,
        genericUrl: seo?.entity?.entityUrl
          ? seo?.entity?.entityUrl
          : config.public.baseUrl,
        // "genericImage":"https://cdn.thewriter.com/branding/company-logo.png",
        // "genericImageWidth":"600",
        // "genericImageHeight":"248",
        genericTelephone: seo?.entity?.entityTelephone
          ? seo?.entity?.entityTelephone
          : "",
        genericEmail: seo?.entity?.entityEmail ? seo?.entity?.entityEmail : "",
        // "genericStreetAddress":"",
        genericAddressLocality: "London",
        genericAddressRegion: "England",
        // "genericPostalCode":"",
        genericAddressCountry: "United Kingdom",
        // "genericGeoLatitude":"",
        // "genericGeoLongitude":"",
        // "personGender":"",
        // "personBirthPlace":"",
        // "organizationDuns":"",
        // "organizationFounder":"",
        // "organizationFoundingDate":"",
        // "organizationFoundingLocation":"",
        // "organizationContactPoints":"",
        // "corporationTickerSymbol":"",
        // "localBusinessPriceRange":"$$$",
        // "localBusinessOpeningHours":[
        //  {"open":null,"close":null},
        //  {"open":null,"close":null},
        //  {"open":null,"close":null},
        //  {"open":null,"close":null},
        //  {"open":null,"close":null},
        //  {"open":null,"close":null},
        //  {"open":null,"close":null}
        // ],
        // "restaurantServesCuisine":"",
        // "restaurantMenuUrl":"",
        // "restaurantReservationsUrl":""
      },
    ]);


    useHead({
      title: seo?.meta?.title,
      meta: meta,
      link: link
    });
  }
</script>

<style lang="scss">
  body,
html {
  overflow: visible;
}
.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  position: relative;
  transition: transform 0.5s $ease-in-out-circ;
  &__main {
    width: 100%;
    min-height: 100vh;
    flex: 1 0 100%;
    position: relative;
    transition: all 0.5s $ease-in-out-circ;
    display: flex;
    flex-direction: column;
  }
  &--modal-open {
    @include breakpoint-less-than(lg) {
      overflow: hidden;
    }
    .app__main {
      @include breakpoint(lg) {
        transform: scale(0.99);
        filter: blur(0.15rem) brightness(50%);
      }
    }
  }
}

.page-left-enter-active,
.page-right-enter-active,
.page-left-leave-active,
.page-right-leave-active {
  transition: 0.3s $ease-in-out-circ;
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
