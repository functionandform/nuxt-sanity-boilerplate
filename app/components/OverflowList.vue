<template>
	<div class="overflow-list cursor-drag" :class="[{'overflow-list--active':isDown,'overflow-list--dragging':isDragging,'overflow-list--double-spacing':doubleSpacing,'overflow-list--stepped':stepped},'overflow-list--'+size,'overflow-list--align-'+align]" ref="overflowList" @mousedown="mouseDown" @mouseleave="mouseLeave" @mouseup="mouseUp" @mousemove.prevent="mouseMove">
		<grid-container>
			<grid-cell>
				<div class="overflow-list__row">
					<slot/>
				</div>
	</grid-cell>
</grid-container>
	</div>
</template>

<script setup> 
	const overflowList = ref(null);
	const isDown = ref(false);
	const isDragging = ref(false);
	const startX = ref(0);
	const scrollLeft = ref(0);
	import { useMediaQuery } from '@vueuse/core';
	const isTouchDevice = useMediaQuery('(hover: none)');
	//import { vIntersectionObserver } from '@vueuse/components'

	const props = defineProps({
	  minimal: { type: Boolean },
	  size: {type:String,default:'regular'},
	  align: {type:String,default:'top'},
	  doubleSpacing:{type:Boolean, default:false},
	  stepped:{type:Boolean,default:false}
	});

	const inview = ref(false);
	
	function mouseDown(e) {
		if (!isTouchDevice.value && overflowList.value) {
			isDown.value = true;
			startX.value = e.pageX - overflowList.value?.offsetLeft;
			scrollLeft.value = overflowList.value?.scrollLeft;
		}
	}

	function mouseLeave() {
		if (!isTouchDevice.value) {
			isDown.value = false;
			isDragging.value = false;
		}
	}

	function mouseUp() {
		if (!isTouchDevice.value) {
			isDown.value = false;
			isDragging.value = false;
		}
	}

	function mouseMove(e) {
		if (!isTouchDevice.value) {
		 if(!isDown.value || !overflowList.value) return;
		  const x = e.pageX - overflowList.value.offsetLeft;
		  const walk = (x - startX.value) * 3; //scroll-fast
		  overflowList.value.scrollLeft = scrollLeft.value - walk;
		  isDragging.value = true;
		}
	}

	// function onOverflowListIntersection(entries, observer) {
	// 	entries.forEach((entry,index) => {
	// 		if (entry.isIntersecting) {
	// 			inview.value = true;
	// 		} else {
	// 			inview.value = false;
	// 			overflowList.value.scrollLeft = 0
	// 		}
	// 	})
	// };


</script>


<style lang="scss">
	.overflow-list {
		overflow:hidden;
		position: relative;
	    overflow-x: scroll;
	    overflow-y: hidden;
	    display:flex;
	    transition: all 0.2s;
	    will-change: transform;
	    user-select: none;
	    transition:transform 1s $ease-out-circ;
	    //padding-left:calc(8.33333333% * 2 - var(--baseline));
	    &::-webkit-scrollbar {
		  display: none;
		}
		-ms-overflow-style: none;  /* IE and Edge */
		scrollbar-width: none;  /* Firefox */
	    &--active {
	    	//transform:scale(1.025);
	    }
	    // &--not-inview {
	    // 	opacity:0;
	    // 	transform:translateX(25vh);
	    // }
	    &--dragging {
	    	.overflow-list__item {
	    		pointer-events: none;
	    	}
	    }
	    &__row {
	    	display:flex;
	    }
	    &__item {
	    	display:inline-block;
	    	position: relative;
	    	vertical-align: middle;
	    	margin-right:vr(1);
	    	flex:0 0 auto;
	    	display:grid;
	    	--base-width:66.66vw;
	    	width:var(--base-width);
	    	@include breakpoint(lg) {
	    		@media (prefers-reduced-motion: no-preference) {
				  @supports (animation-timeline: scroll()) {
				    animation: overflow-list-in linear both;
				    animation-timeline: view(x);
				  }
				}
	    	}
	    	img {
	    		transform-origin:center left;
	    	}
	    	&:nth-child(2) img {
	    		transition-delay:0.1s;
	    	}
	    	&:nth-child(3) img {
	    		transition-delay:0.2s;
	    	}
	    	&:nth-child(4) img {
	    		transition-delay:0.3s;
	    	}
	    	&:nth-child(5) img {
	    		transition-delay:0.4s;
	    	}
	    	@include breakpoint(md) {
	    		--base-width:23vw;
	    	}
	    	@include breakpoint(lg) {
	    		--base-width:23vw;
	    	}
	    	// @include breakpoint(xl) {
	    	// 	--base-width:28vw;
	    	// }
	    	&:last-child {
	    		margin-right:0;
	    	}
	    	&--wide {
	    		@include breakpoint(md) {
		    		width:calc(var(--base-width) * 1.5);
		    	}
	    	}

	    }
	    &--align-center {
	    	.overflow-list__item {
	    		align-content:center;
	    	}
	    }
	    &--align-top {
	    	.overflow-list__item {
	    		align-content:top;
	    	}
	    }
	    &--align-bottom {
	    	.overflow-list__item {
	    		align-content:bottom;
	    	}
	    }
	    &--small {
	    	.overflow-list__item {
	    		--base-width:25vw;
	    		@include breakpoint(md) {
	    		--base-width:24vw;
	    	}
	    	@include breakpoint(lg) {
	    		--base-width:16vw;
	    	}
	    	}
	    }
	    &--large {
	    	.overflow-list__item {
	    		@include breakpoint(md) {
		    		--base-width:60vw;
		    	}
		    	@include breakpoint(lg) {
		    		--base-width:37vw;
		    	}
	    	}
	    }
	    &--double-spacing {
	    	.overflow-list__item {
	    		@include breakpoint(lg) {
		    		margin-right:vr(2);
		    	}
	    	}
	    }
	    &--stepped {
	    	.overflow-list__item {
	    		&:nth-of-type(odd) {
	    			margin-top:calc(var(--base-width) * 0.25);
	    		}
	    	}
	    }
	}

	@keyframes overflow-list-in {
		/* card entry */
		0% {
			transform: translateX(2rem);
		}
		/* card on stage */
		10%, 80% {
			opacity: 1;
			transform: none;
		}
		/* card exit */
		100% {
			transform: translateX(100%) scale(0.8);
			opacity: 0;
		}
	}

</style>