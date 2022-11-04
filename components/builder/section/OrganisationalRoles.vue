<template>
	<container>
		<div class="timeline">
			<article class="timeline__item" v-for="(role,i) in section.roles" :key="'role-'+i">
				<div class="timeline__item__visual" v-if="role.role?.heroImage || role.role?.featuredPerson?.largePhoto">
					<nuxt-img v-if="role.role?.heroImage" provider="sanity" :src="role.role.heroImage.asset._ref" :width="role.role.heroImage.width" :height="role.role.heroImage.height" :placeholder="$urlFor(role.role.heroImage.asset).size(300).quality(25).blur(100).auto('format').url()" sizes="xxs:70vw lg:20vw xl:600px"/>
					<nuxt-img v-else provider="sanity" :src="role.role.featuredPerson.largePhoto.asset._ref" :width="role.role.featuredPerson.largePhoto.width" :height="role.role.featuredPerson.largePhoto.height" :placeholder="$urlFor(role.role.featuredPerson.largePhoto.asset).size(300).quality(25).blur(100).auto('format').url()" sizes="xxs:70vw lg:20vw xl:600px"/>
				</div>
				<div class="timeline__item__caption">
					<h4 class="tag">{{role.role?.title}}</h4>
					<h3>{{role.headline?.length ? role.headline : role.role?.headline}}</h3>
					<p>{{role.description?.length ? role.description : role.role?.summary}}</p>
					<v-button weight="tertiary">Learn more</v-button>
				</div>
			</article>
		</div>
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

	.timeline {
		@include breakpoint(lg) {
			display:flex;
			margin:0 vr(-1);
			padding:vr(0.5);
		}
		&__item {
			@include breakpoint(lg) {
				width:33.33%;
				flex:0 0 auto;
				text-align:center;
				padding:0 vr(0.5);
				margin-bottom:vr(1);
			}
			&__visual {
				width:vr(8); height:vr(8);
				border-radius:$radius-md;
				display:block;
				overflow: hidden;
				position:relative;
				@include breakpoint(lg) {
					margin:0 auto vr(1) auto;
				}
				img {
					position:absolute;
					top:0; left:0; width:100%; height:100%; 
					object-fit: cover; object-position:center;
				}
			}
		}
	}
	</style>