<template>
	<div class="grid-container" :class="{'grid-container--no-padding':noPadding,'grid-container--double-size-gap':doubleSizeGap}">
		<slot/>
	</div>
</template>

<script setup>
	const props = defineProps({
		noPadding:{
			type:Boolean
		},
		doubleSizeGap: {
			type:Boolean
		}
	})
	

</script>

<style lang="scss">
	.grid-container {
		position:relative;
		width:100%;
		display:grid;
		column-gap:vr(1);
		grid-template-columns:repeat(12,1fr);
		padding:0 vr(1);
		margin-left:auto;margin-right:auto;
		@include breakpoint(xxl) {
			padding:0 vr(2);
		}
		&--no-padding {
			padding:0;
		}
		&--double-size-gap {
			@include breakpoint(lg) {
				column-gap: vr(2);
			}
		}
	}

	.grid-container-margin {
		margin-right:vr(-1);
		margin-left:vr(-1);
		@include breakpoint(xxl) {
			margin-right:vr(-2);
			margin-left:vr(-2);
		}
		&--padding {
			padding-right:vr(1);
			padding-left:vr(1);
			@include breakpoint(xxl) {
				padding-right:vr(2);
				padding-left:vr(2);
			}
		}
	}
</style>