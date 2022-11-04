<template>
	<container v-if="section?.testimonial">
		<row center-xs>
			<column xs="12" lg="8">
				<blockquote>
					<nuxt-img v-if="section.testimonial.person?.smallPhoto" provider="sanity" :src="section.testimonial.person.smallPhoto.asset._ref" :width="section.testimonial.person.smallPhoto.width" :height="section.testimonial.person.smallPhoto.height" :placeholder="$urlFor(section.testimonial.person.smallPhoto.asset).size(200).quality(25).blur(100).auto('format').url()" sizes="xxs:70vw lg:20vw xl:300px"/>
					<h3>{{section.testimonial.quote}}</h3>
					<p v-if="section.testimonial.person">
						{{section.testimonial.person.firstName}} {{section.testimonial.person.lastName}}
						<template v-if="section.testimonial.person.role || section.testimonial.person.organisation">
							– <span v-if="section.testimonial.person.role">{{section.testimonial.person.role}}</span>, <strong v-if="section.testimonial.person.organisation">{{section.testimonial.person.organisation.name}}</strong>
						</template>
					</p>
				</blockquote>
			</column>
		</row>
	</container>
</template>

<script setup> 
	const props = defineProps({
		section: {
			required:true,
			type:Object
		}
	})


</script>

<style lang="scss">
	
</style>