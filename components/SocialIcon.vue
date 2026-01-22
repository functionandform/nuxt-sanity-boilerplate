<template>
	<svg :class="'icon '+addClass+' icon--'+size"><use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="iconHref"></use></svg>
</template>


<script setup>
	import icons from '~/assets/iconography/social.svg';
	const props = defineProps({
		name: {
			required:true,
			type:String
		},
		addClass: {
			required:false,
			type:String,
			default:''
		},
		size: {
			required:false,
			type:String,
			default:'regular'
		}
	});

	const iconHref = computed(() => {
		return icons+'#icon-'+ props.name
	})
</script>
