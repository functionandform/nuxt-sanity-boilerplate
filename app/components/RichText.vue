<template>
	<div>
		<sanityContent v-if="blocks" :value="blocks" :components="components"/>
	</div>
</template>

<script setup>

	import Link from './Link.vue'
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
			link:props => h(Link, {
			  ...props.value,
			}),
		}
	}




</script>

