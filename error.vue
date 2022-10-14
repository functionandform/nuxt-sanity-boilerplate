<template>
  <div class="app app--error">
    <client-only>
      <main>
        <container>
          <row center-xs>
            <column xs="12" md="8">
              <div class="header-spacer"></div>
              <h4 v-if="error && error.statusCode">Error {{error.statusCode}}</h4>
              <template v-if="error.statusCode === 404">
                <h1>Sorry, we can't seem to find that page.</h1>
                <p>It might have been moved or deleted. Maybe our homepage will help you find what you're looking for?</p>
                <v-button to="/" weight="primary">Homepage</v-button>
              </template>
              <template v-else>
                <h1>Sorry, we seem to be having some technical issues.</h1>
                <p>Try refreshing the page or try again later</p>

              </template>
            </column>
          </row>
        </container>
      </main>
    </client-only>
  </div>
</template>

<script setup>
  const props = defineProps({
    error: Object
  })
</script>
