<template>
	<div class="logo-parade" v-if="logos?.length">
		<nuxt-img class="logo-parade__logo" v-for="(item,i) in logos.slice(0,4)" :key="'logo-'+i" provider="sanity" :src="getLogo(item).asset?._ref" :width="getLogo(item).width" :height="getLogo(item).height" sizes="xxs:25vw xs:25w sm:25w md:200px" loading="lazy" :alt="item.name ? item.name : item.title ? item.title : 'logo'"/>
	</div>
</template>

<script setup>
	const props = defineProps({
		logos: {
			type:Array
		}
	})
	function getLogo(item) {
		return item && item.logo ? item.logo : item && item.asset ? item : {}
	}


</script>

<style lang="scss">
	.logo-parade {
		display:flex;
		align-items:center;
		margin:0 vr(-0.5);
		flex-wrap:wrap;
		
		&__logo {
			max-height:vr(2);
			flex:1 1 auto;
			width:vr(2);
			max-width:vr(4);
			min-width:vr(3);
			object-fit: contain;
			object-position: center;
			margin:0 vr(0.5) vr(1) vr(0.5);
		}
	}

	.align-center .logo-parade, .logo-parade.align-center {
		justify-content: center;
	}

	

</style>