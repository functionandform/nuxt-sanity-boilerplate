<template>
	<div>
		<sanityContent v-if="blocks" :value="blocks" :components="components"/>
	</div>
</template>

<script setup>

	import Link from '~/components/Link.vue'
	const props = defineProps({
		blocks: {
			type:Array
		},
		noHTags: {
			type:Boolean,
			default:false
		}
	})


	const components = {
			marks: {
			// Custom marks handling
			//internalLink: props => h('a', { href: props.value.href }, props.text)
			link:props => h(Link, {
			  ...props.value,
			}),
		}
	}




</script>

