<template>
	<nuxt-link v-if="$createPath(getInternal) || getExternal || getHash" :to="getExternal ? getExternal : getInternal ? {path:$createPath(getInternal),getHash:getHash ? '#'+getHash : null} : getHash ? {getHash:'#'+getHash} : null" :target="getExternal ? '_blank' : null" :title="getInternal?.headline ? toPlainText(getInternal.headline) : getInternal?.title"><slot/></nuxt-link>
</template>


<script setup>
	import { toPlainText } from '@portabletext/vue';
	const props = defineProps({
		external: {
			type:String
		},
		internal:{
			type:Object
		},
		hash: {
			type:String
		},
		value: {
			type:Object
		},
		href: {
			type:String
		},
		mailto:{
			type:String
		},
		mailtoSubject:{
			type:String
		}
	});

	const getExternal = computed(() => {
		if (props.mailto) {
			return `mailto:${props.mailto}${props.mailtoSubject ? '?subject'+props.mailtoSubject : ''}`
		} else {
			return props.external || props.value?.external || props.href || props.value?.href
		}
	})

	const getInternal = computed(() => {
		return props.internal || props.value?.internal
	})
	const getHash = computed(() => {
		return props.hash || props.value?.hash
	})
</script>
