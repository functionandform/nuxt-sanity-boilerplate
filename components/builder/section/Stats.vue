<template>
	<container>
		<row>
			<column v-for="(stat,i) in section.stats" :key="'stat-'+i" sm="6" lg="3">
				<div class="stat">
					<data class="secondary-color block no-margin" :class="[stat.data.length < 8 ? 'h1' : stat.data.length < 10 ? 'h2' : 'h3']">{{stat.data}}<sup v-if="caveats.find(caveat => caveat.index === i)">{{caveats.find(caveat => caveat.index === i).marker}}</sup></data>
					<label class="block">{{stat.suffix}}</label>
					<label class="block"></label>
				</div>
			</column>
		</row>
		<p class="small no-margin" v-for="(caveat,i) in caveats" :key="'caveat-'+i">{{caveat.marker}}{{caveat.text}}</p>
	</container>
</template>

<script setup> 

	import { computed } from 'vue';

	const props = defineProps({
		section: {
			required:true,
			type:Object
		}
	})

	const caveats = computed(() => {
		let markers = ['*','†','‡','§'];
		let caveats = [];
		if (props.section?.stats) {
			let statIndex = 0;
			props.section.stats.forEach((stat,index) => {
				let caveat = {};
				if (stat.caveat && stat.caveat.length) {
					caveat.text = stat.caveat;
				}
				if (Object.keys(caveat).length !== 0) {
					caveat.index = index;
					caveat.marker = markers[statIndex];
					caveats.push(caveat);
					statIndex = statIndex + 1;
				}
			});
		}
		return caveats;
	});





</script>

<style lang="scss">
	.stat {
		margin-bottom:vr(1);
	}

	</style>