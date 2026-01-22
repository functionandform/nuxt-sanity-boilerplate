<template>
	<div class="overflow-list__item" :class="{'overflow-list__item--wide':wide}">
		
			<slot/>

	</div>
</template>

<script setup>

	const props = defineProps({
		wide:{
			type:Boolean
		}
	})
	</script>
