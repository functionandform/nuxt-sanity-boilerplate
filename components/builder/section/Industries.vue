<template>
	<container>
		<row>
			<column xs="12" md="6" lg="4" v-for="(industry,i) in section.industries" :key="'industry-'+i">
				<nuxt-link :to="$createPath(industry)" class="industry">
					<div class="industry__icon"><icon :name="industry.icon"/></div>
					<div class="industry__caption">
						<h4>{{industry.title}}</h4>
						<p class="no-margin">{{industry.summary}}</p>
					</div>
				</nuxt-link>
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
	.industry {
		color:inherit;
		margin-bottom:vr(1);
		padding:vr(1) vr(1) vr(1) vr(1);
		border-radius:$radius-md;
		background-color:var(--bg);
		display:flex;
		align-items: center;
		&__icon {
			margin-right:vr(1);
		}
		.icon {
			height:4rem; width:4rem;
			stroke-width:0.5px;
			color:var(--secondary);
		}
	}
	</style>