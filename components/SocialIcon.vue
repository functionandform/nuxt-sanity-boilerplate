<template>
	<svg :class="'social-icon '+addClass+' social-icon--'+size"><use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="iconHref"></use></svg>
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


<style lang="scss">

	/* Generated using nucleoapp.com */
	/* --------------------------------

	Icon colors

	-------------------------------- */

	.social-icon {
	  display: inline-block;
	  /* icon primary color */
	  color:var(--contrast);
	  height:1em; width:1em;
	  vertical-align: middle;
	  
	}

	.social-icon use {
	  /* icon secondary color - fill */
	  fill: currentColor;
	}


</style>