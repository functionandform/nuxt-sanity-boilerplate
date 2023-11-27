<template>
  <div class="app app--error">
    <client-only>
      <main>
        <grid-container>
            <grid-cell col-span-lg="8" col-start-lg="3">
              <div class="header-spacer"></div>
              <h4 v-if="error && error.statusCode">Error {{error.statusCode}}</h4>
              <template v-if="error.statusCode == 404">
                <h1>Sorry, we can't seem to find that page.</h1>
                <p>It might have been moved or deleted. Maybe our homepage will help you find what you're looking for?</p>
                <v-button to="/" weight="primary">Homepage</v-button>
              </template>
              <template v-else>
                <h1>Well that didn't go to plan.</h1>
                <p>Something has gone wrong on our end. Please try refreshing or check back later.</p>
              </template>
            </grid-cell>
        </grid-container>
      </main>
    </client-only>
  </div>
</template>

<script setup>
  const props = defineProps({
    error: Object
  })
</script>
