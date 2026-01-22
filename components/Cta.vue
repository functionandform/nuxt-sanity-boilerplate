<template>
<button-row v-if="cta">
    <v-button v-for="(button,i) in cta" :key="'button-'+i" :to="button.link?.internal ? $createPath(button.link.internal) : button.link?.href" :weight="button.weight">{{button.label}}</v-button>
    </button-row>
	
</template>
<script setup>
	const props = defineProps({
		cta:{type:Object}
	})

	function getType(button) {
		return button?.link?.href?._type || null
	}

	
</script>

