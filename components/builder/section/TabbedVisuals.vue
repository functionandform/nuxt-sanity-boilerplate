<template>
	<container>
		<div class="tabbed-visuals">
			<row middle-lg>

					<column xs="12" lg="5">

							<aside class="tabbed-visuals__tabs" type="list" label="Tabs" role="tablist" ref="tabs" :class="{'tabbed-visuals__tabs--downwards-animation':indexIncreasing}">
								
								<div class="tabbed-visuals__tabs__panel" ref="panel"></div>
								
								<div v-for="(item,i) in section.sections" class="tabbed-visuals__tabs__tab" role="tab" :tabindex="i" :class="{'tabbed-visuals__tabs__tab--active':i === currentSectionIndex}" :data-index="i" @mouseover="changeTab(i)" @click="changeTab(i)" :key="'tab-'+i">
									<div class="tabbed-visuals__tabs__tab__summary">
										<h3>{{item.title}}</h3>
									</div>
									<div class="tabbed-visuals__tabs__tab__details">
										<p>{{item.description}}</p>
										<cta v-if="item.cta" :cta="item.cta"/>
									</div>
								</div>
							</aside>

					</column>

				<column xs="12" lg="6" lg-offset="1">
					<div class="tabbed-visuals__content">
						<section class="tabbed-visuals__content__section" v-for="(item,i) in section.sections" :key="'visual-section-'+i" :class="{'tabbed-visuals__content__section--active':i === currentSectionIndex}">
							<div class="tabbed-visuals__content__section__visual">
								<layered-graphics :layered-graphics="item.layeredGraphics" :hidden="isDesktop && currentSectionIndex !== i"/>
							</div>
							<div class="tabbed-visuals__content__section__caption">
								<h3>{{item.title}}</h3>
								<p>{{item.description}}</p>
								<cta v-if="item.cta" :cta="item.cta"/>
							</div>
						</section>
					</div>
				</column>
			</row>
		</div>
	</container>
</template>

<script setup> 
	import { ref, computed, onMounted, onUnmounted } from 'vue';
	const currentSectionIndex = ref(0);
	const isDesktop = ref(null);
	const mediaQuery = ref(null);
	const panel = ref(null);
	const tabs = ref(null);
	const indexIncreasing = ref(true);
	const props = defineProps({
		section: {
			required:true,
			type:Object
		}
	})

	onMounted(() => {
		if (process.client) {
			mediaQuery.value = window.matchMedia('(min-width:1024px)');
			checkDeviceSize(mediaQuery.value);
			mediaQuery.value.addListener(checkDeviceSize);
			changeTab(0);
		}
	});

	onUnmounted(()=> {
		if (process.client) {
			mediaQuery.value.removeEventListener('change', checkDeviceSize);
		}
	});



    function checkDeviceSize(query) {
        if (query && query.matches) {
          isDesktop.value = true
        } else {
          isDesktop.value = false
        }
    };
    function changeTab(i) {
    	indexIncreasing.value = i > currentSectionIndex.value;
    	currentSectionIndex.value = i;
    	if (tabs?.value) {
    		const currentTab = tabs.value.querySelector('.tabbed-visuals__tabs__tab--active');
    		const newTab = tabs.value.querySelector('[data-index="'+i+'"]');
    		if (currentTab) {
    			currentTab.classList.remove('tabbed-visuals__tabs__tab--active');
    		}
    		if (newTab) {
    			newTab.classList.add('tabbed-visuals__tabs__tab--active');

	    		setTimeout(function() {
	    			positionPanel(newTab);
	    		},300);

    		}
    	}
    };

    function tabOpenStart(el) {
      el.style.height = el.scrollHeight + "px";
    };
    function tabOpenEnd(el) {
      el.style.height = "";
    };

    function positionPanel(newTab) {
    	if (panel?.value && newTab && tabs?.value) {
    		const top = newTab.offsetTop;
    		const bottom = tabs.value.clientHeight - (newTab.offsetTop + newTab.offsetHeight);
    		panel.value.style.top = top+'px';
    		panel.value.style.bottom = bottom+'px';

    	}
    }

    

</script>

<style lang="scss">
	.tabbed-visuals {
		margin-bottom:vr(1);
		&__tabs {
			display:none;
			@include breakpoint(lg) {
				display:block;
				position:relative;
			}
			&__panel {
				display:block;
				transition:top 0.2s $ease-in-out-circ, bottom 0.3s $ease-in-out-circ 0s;
				border-radius:$radius-md;
				position:absolute;
				top:0; left:0; right:0; 
				//margin:vr(-1);
				background-color: var(--bg);
			}
			&--downwards-animation {
				.tabbed-visuals__tabs__panel {
					transition:top 0.3s $ease-in-out-circ, bottom 0.2s $ease-in-out-circ 0s;
				}
			}
			&__tab {
				display:block;
				cursor:default;
				position:relative;
				padding:vr(1) vr(1) 0 vr(1);
				&__details {
					padding-bottom:vr(1);
					position:relative;
					overflow: hidden;
					max-height:0;
					opacity:0;
					transition:max-height 0.3s $ease-in-out-circ, opacity 0.2s $ease-in-out-circ;
					&::after {
						position:relative;
						display:block;
						height:vr(1);
						content:" ";
						clear:both;
					}
				}
				&--active {
					.tabbed-visuals__tabs__tab__details {
						max-height:vr(6);
						opacity:1;
						transition:max-height 0.3s $ease-in-out-circ, opacity 0.2s $ease-in-out-circ 0.3s;
					}
				
				}
			}
		}
		&__content {
			display:block;
			@include breakpoint(lg) {
				@include aspect-ratio(1,1);
			}
			&__section {
				display:block;
				margin-bottom:vr(2);
				@include breakpoint(lg) {
					position:absolute;
					top:0; left:0;
					width:100%; height:100%;
				}
				&__visual {
					margin-bottom:vr(1);
					height:100%;
				}
				&__caption {
					@include breakpoint(lg) {
						display:none;
					}
				}
			}
		}
	}
</style>