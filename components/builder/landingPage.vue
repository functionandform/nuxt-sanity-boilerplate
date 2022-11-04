<template>
	<template v-if="entry?.landingPageBuilder?.length">
		<section class="landing-page-section" v-for="(section,i) in entry.landingPageBuilder" :key="'landing-page-section-'+i" :id="'section-'+(i+1)">
			<div class="landing-page-section__introduction">
				<container v-if="section.introduction && section.introduction.length">
					<row>
						<column xxs="12" md="8">
							<Sanity-content :blocks="section.introduction" />
						</column>
					</row>
				</container>
			</div>
			<builder-section-sequence v-if="section._type === 'sequence'" :section="section"/>
			<builder-section-stats v-else-if="section._type === 'stats'" :section="section"/>
			<builder-section-tabbed-visuals v-else-if="section._type === 'tabbedVisuals'" :section="section"/>
			<builder-section-organisational-roles v-else-if="section._type === 'organisationalRoles'" :section="section"/>
			<builder-section-industries v-else-if="section._type === 'industries'" :section="section"/>
			<builder-section-cta-banner v-else-if="section._type === 'ctaBanner'" :section="section"/>
			<builder-section-testimonial v-else-if="section._type === 'testimonial'" :section="section"/>
		</section>
	</template>
</template>

<script setup> 

	const props = defineProps({
		entry: {
			required:true,
			type:Object
		}
	})

</script>

<style lang="scss">

	.landing-page-section {
		padding:vr(3) 0 vr(2) 0;
		&__introduction {
			margin-bottom:vr(2);
		}
	}
</style>