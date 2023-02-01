<template>
<button-row v-if="cta">
    <v-button v-for="(button,i) in cta" :key="'button-'+i" :to="button.link?.internal?.path ? button.link.internal.path : button.link?.external" :weight="button.weight" :leading-icon="button.label.includes('video') ? 'play-movie' : 'arrow-right'">{{button.label}}</v-button>
    </button-row>
	
</template>
<script setup>
	const props = defineProps({
		cta:{type:Object}
	})
</script>
