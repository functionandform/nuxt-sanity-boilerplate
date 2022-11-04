<template>
	<container>
		<div :class="'sequence sequence--'+section.displayAs">
			<!-- <div class="sequence__intro">
				<row>
					<column lg="8">
						<sanity-content :blocks="section.introduction"/>
					</column>
				</row>
			</div> -->
			<div class="sequence__content" ref="content">
				<div class="sequence__content__overflow">
					
					<section v-for="(innerSection,index) in section.sections" :key="'section-'+index" class="sequence__section" :data-index="index">
						<row middle-lg :reverse="section.displayAs === 'alternating' && index % 2 === 1" between-lg>
							<column xxs="12" lg="6" class="sequence__section__column sequence__section__column--visual" >
								<figure class="sequence__section__visual">
									<layered-graphics :layered-graphics="innerSection.layeredGraphics"/>
								</figure>
							</column>
								<column xxs="12" lg="5" class="sequence__section__column sequence__section__column--caption" >
								<div class="sequence__section__caption">
									<h4 class="tag" v-if="innerSection.title?.length">{{innerSection.title}}</h4>
									<sanity-content :blocks="innerSection.text"/>
									<cta :cta="innerSection.cta"/>
								</div>
							</column>
						</row>
					</section>

				</div>
				<div class="sequence__fixed-area" v-if="section.displayAs === 'timeline'">
					<div class="sequence__fixed-area__visual" ref="fixedVisual">
						<row reverse>
							<column lg="6">
<!-- 								<transition-group name="fade" mode="out-in"> -->
									<div class="sequence__fixed-area__visual__section" v-for="(innerSection,index) in section.sections" :key="'visual-section-'+index" :class="{'sequence__fixed-area__visual__section--active':currentSectionIndex === index}">
										
										<layered-graphics :layered-graphics="innerSection.layeredGraphics" :hidden="currentSectionIndex !== index"/>
									</div>
<!-- 								</transition-group> -->
							</column>
						</row>
					</div>
				</div>
			</div>
		</div>
	</container>
</template>

<script setup> 
	import { ref, computed, onMounted, onUnmounted } from 'vue';
	const props = defineProps({
		section: {
			required:true,
			type:Object
		}
	});

	const isDesktop = ref(false);
	const currentSectionIndex = ref(0);
	const fixedVisual = ref(null);
	const content = ref(null);

	function initMediaQuery() {
		const mediaQuery = window.matchMedia('(min-width:1024px)');
		checkDeviceSize(mediaQuery);
		mediaQuery.addListener(checkDeviceSize);
        
    };
    function checkDeviceSize(query) {
        if (query && query.matches) {
          isDesktop.value = true
        } else {
          isDesktop.value = false
        }
    };
	function initObserver() {
		if (props.section?.displayAs === 'timeline' && isDesktop) {
			console.log(isDesktop);
			const target = fixedVisual;
			const sections = content?.value.querySelectorAll('.sequence__section');
			if (target && sections?.length) {
				let callback = (entries, observer) => {
					entries.forEach((entry,index) => {
						if (entry.isIntersecting) {
							currentSectionIndex.value = parseInt(entry.target.getAttribute('data-index'));
						}	
					})
				}
				let options = {
					rootMargin: '0px',
					threshold:1.0
				}
				let observer = new IntersectionObserver(callback,options);
				sections.forEach(section => {
					observer.observe(section);
				});
			}
		}
	}


	onMounted(() => {
		if (process.client) {
			initMediaQuery();
			initObserver();
			window.addEventListener("resize", initObserver);
		}
	});

	onUnmounted(()=> {
		if (process.client) {
			window.removeEventListener("resize", initObserver);
		}
	});
	



</script>

<style lang="scss">
	.sequence {
		position:relative;
		&--alternating {
			.sequence {
				&__section {
					margin-bottom:vr(2);
					@include breakpoint(lg) {
						margin-bottom:vr(3);
					}
					&__visual {
						margin-bottom:vr(1);
						display:block;
						width:100%;						
					}
				}
			}
		}
		&--timeline {
			@include breakpoint(lg) {
				border-left:1px solid var(--bg);
			}
			.sequence {
				&__intro {
					@include breakpoint(lg) {
						padding-left:vr(1);
					}
				}
				&__content {
					position:relative;
					@include breakpoint-less-than(lg) {
						overflow:hidden;
				    padding:0;
				    margin:0 vr(-1);
				    &__overflow {
			      	display:flex;
							width:100%;
							margin:0;
							flex-wrap:nowrap;
							scroll-snap-type:x mandatory;
							overflow:hidden;
							overflow-x:scroll;
							.sequence__section {
								width:75vw;
								scroll-snap-align:start;
								transform:none !important;
								flex:0 0 auto;
								margin-right:0;
								padding-right:0;
								padding-left:vr(1);
								&:last-child {
									margin-right:vr(1);
								}
							}
						}
					}
				}
				&__section {
					@include breakpoint(lg) {
						height:vr(24);
						display:flex;
						flex-direction: column;
						justify-content: center;
					}
					&__caption {
						margin-bottom:vr(2);
						padding-left:vr(1);
					}
					&__visual {
						margin-bottom:vr(1);
						display:block;
						width:100%;						
					}
					&__column {
						&--visual {
							@include breakpoint(lg) {
								display:none;
							}
						}
					}
				}
				&__fixed-area {
					display:none;
					@include breakpoint(lg) {
						display:block;
						position:absolute;
						top:0; left:0;
						width:100%; height:100%;
						pointer-events:none;
						&__visual {
							display:block;
							height:vr(20);
							position:sticky;
							top:calc(50vh - (var(--baseline) * 10));
							left:0;

							&::before {
								position:absolute;
								top:0; left:-4px;
								display:block;
								width:7px; height:100%;
								content:"";
								background-color: var(--secondary);
								border-radius:3px;
							}
							.row, .col {
								position:relative;
								height:100%;
							}
							.col {
								pointer-events:all;
							}
							&__section {
								// visibility:hidden;
								width:100%;
								height:100%;
								position:absolute;
								top:0; left:0;
							}
						}
					}
				}
			}
		}
	}

</style>