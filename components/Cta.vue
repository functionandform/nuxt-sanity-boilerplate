<template>
<button-row v-if="cta">
    <v-button v-for="(button,i) in cta" :key="'button-'+i" :url="button.link?.external" :to="$createPath(button.link?.internal)" :weight="button.weight" :leading-icon="button.label.includes('video') ? 'play-movie' : 'arrow-right'">{{button.label}}</v-button>
    </button-row>
	
</template>
<script setup>
	const props = defineProps({
		cta:{type:Object}
	})
</script>
