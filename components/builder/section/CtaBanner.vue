<template>
	<container>
		<banner>
			<row center-xs>
				<column xs="12" lg="8">
					<h3 v-if="section.headline">{{section.headline}}</h3>
					<p v-if="section.description">{{section.description}}</p>
					<cta :cta="section.cta"/>
				</column>
			</row>
		</banner>
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