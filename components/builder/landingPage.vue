<template>
	<template v-if="entry?.landingPageBuilder?.length">
		<section class="landing-page-section" v-for="(section,i) in entry.landingPageBuilder" :key="'landing-page-section-'+i" :id="'section-'+(i+1)">
			<article class="landing-page-section__introduction" v-if="section._type !== 'indexedPoints' && section._type !== 'sequence' && section.introduction?.length">
				<container>
					<row>
						<column xxs="12" md="8">
							<Sanity-content :blocks="section.introduction" />
						</column>
					</row>
				</container>
			</article>
			<builder-section-sequence v-if="section._type === 'sequence'" :section="section"/>
			<builder-section-stats v-else-if="section._type === 'stats'" :section="section"/>
			<builder-section-tabbed-visuals v-else-if="section._type === 'tabbedVisuals'" :section="section"/>
			<builder-section-organisational-roles v-else-if="section._type === 'organisationalRoles'" :section="section"/>
			<builder-section-industries v-else-if="section._type === 'industries'" :section="section"/>
			<builder-section-cta-banner v-else-if="section._type === 'ctaBanner'" :section="section"/>
			<builder-section-testimonial v-else-if="section._type === 'testimonial'" :section="section"/>
			<builder-section-people v-else-if="section._type === 'people'" :section="section" :hosts="entry.hosts"/>
			<builder-section-indexed-points v-else-if="section._type === 'indexedPoints'" :section="section"/>
			<builder-section-case-studies v-else-if="section._type === 'caseStudies'" :section="section" :industry="entry._type === 'industry' ? entry.slug.current : null"/>
			<builder-section-blog-entries v-else-if="section._type === 'blogEntries'" :section="section" :industry="entry._type === 'industry' ? entry.slug.current : null" :role="entry._type === 'role' ? entry.slug.current : null"/>
			<builder-section-annotated-visual v-else-if="section._type === 'annotatedVisual'" :section="section"/>
			<builder-section-gallery v-else-if="section._type === 'gallery'" :section="section"/>
		</section>
	</template>
</template>

<script setup> 

	import {provide} from 'vue';

	const indexes = ref({annotatedVisual:-1});

	const props = defineProps({
		entry: {
			required:true,
			type:Object
		}
	})

	provide('landingPageBuilderIndexes',indexes)

</script>

<style lang="scss">

	.landing-page-section {
		padding:vr(2) 0 vr(1) 0;
		@include breakpoint(lg) {
			padding:vr(3) 0 vr(2) 0;
		}
		@include breakpoint-less-than(lg) {
			overflow: hidden;
		}
		&__introduction {
			margin-bottom:vr(2);
		}
	}
</style>