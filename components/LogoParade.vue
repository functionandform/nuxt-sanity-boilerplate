<template>
	<div class="logo-parade" v-if="logos?.length">
		<nuxt-img class="logo-parade__logo" v-for="(item,i) in logos.slice(0,4)" :key="'logo-'+i" provider="sanity" :src="item.asset?._ref ? item.asset?._ref : item.logo?.asset?._ref ? item.logo?.asset?._ref : null" :width="600" sizes="xxs:25vw lg:200px"/>
	</div>

</template>

<script setup>
	const props = defineProps({
		logos: {
			type:Array
		}
	})


</script>

<style lang="scss">
	.logo-parade {
		display:flex;
		align-items:center;
		margin:0 vr(-1);
		flex-wrap:wrap;
		
		&__logo {
			height:vr(2);
			max-width:vr(4.5);
			object-fit: contain;
			object-position: center;
			margin:0 vr(1) vr(1) vr(1);
		}
	}

</style>