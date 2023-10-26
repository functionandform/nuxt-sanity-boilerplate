<template>
	<div :class="'grid-cell'+classes">
		<slot/>
	</div>
</template>

<script setup>

	const props = defineProps({
		colSpanXxs:{type:[String,Number]},
		colSpanXs: {type:[String,Number]},
		colSpanSm: {type:[String,Number]},
		colSpanMd:{type:[String,Number]},
		colSpanLg: {type:[String,Number]},
		colSpanXl: {type:[String,Number]},
		colSpanXxl:{type:[String,Number]},
		colSpanXxxl:{type:[String,Number]},

		colStartXxs:{type:[String,Number]},
		colStartXs: {type:[String,Number]},
		colStartSm: {type:[String,Number]},
		colStartMd:{type:[String,Number]},
		colStartLg: {type:[String,Number]},
		colStartXl: {type:[String,Number]},
		colStartXxl:{type:[String,Number]},
		colStartXxxl:{type:[String,Number]},

		rowSpanXxs:{type:[String,Number]},
		rowSpanXs: {type:[String,Number]},
		rowSpanSm: {type:[String,Number]},
		rowSpanMd:{type:[String,Number]},
		rowSpanLg: {type:[String,Number]},
		rowSpanXl: {type:[String,Number]},
		rowSpanXxl:{type:[String,Number]},
		rowSpanXxxl:{type:[String,Number]},

		rowStartXxs:{type:[String,Number]},
		rowStartXs: {type:[String,Number]},
		rowStartSm: {type:[String,Number]},
		rowStartMd:{type:[String,Number]},
		rowStartLg: {type:[String,Number]},
		rowStartXl: {type:[String,Number]},
		rowStartXxl:{type:[String,Number]},
		
		alignCenterXxxl:{type:Boolean},
		alignCenterXxs:{type:Boolean},
		alignCenterXs: {type:Boolean},
		alignCenterSm: {type:Boolean},
		alignCenterMd:{type:Boolean},
		alignCenterLg: {type:Boolean},
		alignCenterXl: {type:Boolean},
		alignCenterXxl:{type:Boolean},
		alignCenterXxxl:{type:Boolean},

		alignStartXxxl:{type:Boolean},
		alignStartXxs:{type:Boolean},
		alignStartXs: {type:Boolean},
		alignStartSm: {type:Boolean},
		alignStartMd:{type:Boolean},
		alignStartLg: {type:Boolean},
		alignStartXl: {type:Boolean},
		alignStartXxl:{type:Boolean},
		alignStartXxxl:{type:Boolean},

		alignEndXxxl:{type:Boolean},
		alignEndXxs:{type:Boolean},
		alignEndXs: {type:Boolean},
		alignEndSm: {type:Boolean},
		alignEndMd:{type:Boolean},
		alignEndLg: {type:Boolean},
		alignEndXl: {type:Boolean},
		alignEndXxl:{type:Boolean},
		alignEndXxxl:{type:Boolean},

		alignStretchXxxl:{type:Boolean},
		alignStretchXxs:{type:Boolean},
		alignStretchXs: {type:Boolean},
		alignStretchSm: {type:Boolean},
		alignStretchMd:{type:Boolean},
		alignStretchLg: {type:Boolean},
		alignStretchXl: {type:Boolean},
		alignStretchXxl:{type:Boolean},
		alignStretchXxxl:{type:Boolean},


	})

	const classes = computed(() => {
		return `${props.colSpanXxs ? ' grid-cell--col-span-xxs-'+props.colSpanXxs : ''}${props.colSpanXs ? ' grid-cell--col-span-xs-'+props.colSpanXs : ''}${props.colSpanSm ? ' grid-cell--col-span-sm-'+props.colSpanSm : ''}${props.colSpanMd ? ' grid-cell--col-span-md-'+props.colSpanMd : ''}${props.colSpanLg ? ' grid-cell--col-span-lg-'+props.colSpanLg : ''}${props.colSpanXl ? ' grid-cell--col-span-xl-'+props.colSpanXl : ''}${props.colSpanXxl ? ' grid-cell--col-span-xxl-'+props.colSpanXxl : ''}${props.colSpanXxxl ? ' grid-cell--col-span-xxxl-'+props.colSpanXxxl : ''}${props.colStartXxs ? ' grid-cell--col-start-xxs-'+props.colStartXxs : ''}${props.colStartXs ? ' grid-cell--col-start-xs-'+props.colStartXs : ''}${props.colStartSm ? ' grid-cell--col-start-sm-'+props.colStartSm : ''}${props.colStartMd ? ' grid-cell--col-start-md-'+props.colStartMd : ''}${props.colStartLg ? ' grid-cell--col-start-lg-'+props.colStartLg : ''}${props.colStartXl ? ' grid-cell--col-start-xl-'+props.colStartXl : ''}${props.colStartXxl ? ' grid-cell--col-start-xxl-'+props.colStartXxl : ''}${props.colStartXxxl ? ' grid-cell--col-start-xxxl-'+props.colStartXxxl : ''}

			${props.rowSpanXxs ? ' grid-cell--row-span-xxs-'+props.rowSpanXxs : ''}${props.rowSpanXs ? ' grid-cell--row-span-xs-'+props.rowSpanXs : ''}${props.rowSpanSm ? ' grid-cell--row-span-sm-'+props.rowSpanSm : ''}${props.rowSpanMd ? ' grid-cell--row-span-md-'+props.rowSpanMd : ''}${props.rowSpanLg ? ' grid-cell--row-span-lg-'+props.rowSpanLg : ''}${props.rowSpanXl ? ' grid-cell--row-span-xl-'+props.rowSpanXl : ''}${props.rowSpanXxl ? ' grid-cell--row-span-xxl-'+props.rowSpanXxl : ''}${props.rowSpanXxxl ? ' grid-cell--row-span-xxxl-'+props.rowSpanXxxl : ''}
			${props.rowStartXxs ? ' grid-cell--row-start-xxs-'+props.rowStartXxs : ''}${props.rowStartXs ? ' grid-cell--row-start-xs-'+props.rowStartXs : ''}${props.rowStartSm ? ' grid-cell--row-start-sm-'+props.rowStartSm : ''}${props.rowStartMd ? ' grid-cell--row-start-md-'+props.rowStartMd : ''}${props.rowStartLg ? ' grid-cell--row-start-lg-'+props.rowStartLg : ''}${props.rowStartXl ? ' grid-cell--row-start-xl-'+props.rowStartXl : ''}${props.rowStartXxl ? ' grid-cell--row-start-xxl-'+props.rowStartXxl : ''}${props.rowStartXxxl ? ' grid-cell--row-start-xxxl-'+props.rowStartXxxl : ''}
			
			${props.alignCenterXxs ? ' grid-cell--align-center-xxs' : ''}${props.alignCenterXs ? ' grid-cell--align-center-xs' : ''}${props.alignCenterSm ? ' grid-cell--align-center-sm' : ''}${props.alignCenterMd ? ' grid-cell--align-center-md' : ''}${props.alignCenterLg ? ' grid-cell--align-center-lg' : ''}${props.alignCenterXl ? ' grid-cell--align-center-xl' : ''}${props.alignCenterXxl ? ' grid-cell--align-center-xxl' : ''}${props.alignCenterXxxl ? ' grid-cell--align-center-xxxl' : ''}

			${props.alignStartXxs ? ' grid-cell--align-start-xxs' : ''}${props.alignStartXs ? ' grid-cell--align-start-xs' : ''}${props.alignStartSm ? ' grid-cell--align-start-sm' : ''}${props.alignStartMd ? ' grid-cell--align-start-md' : ''}${props.alignStartLg ? ' grid-cell--align-start-lg' : ''}${props.alignStartXl ? ' grid-cell--align-start-xl' : ''}${props.alignStartXxl ? ' grid-cell--align-start-xxl' : ''}${props.alignStartXxxl ? ' grid-cell--align-start-xxxl' : ''}

			${props.alignEndXxs ? ' grid-cell--align-end-xxs' : ''}${props.alignEndXs ? ' grid-cell--align-end-xs' : ''}${props.alignEndSm ? ' grid-cell--align-end-sm' : ''}${props.alignEndMd ? ' grid-cell--align-end-md' : ''}${props.alignEndLg ? ' grid-cell--align-end-lg' : ''}${props.alignEndXl ? ' grid-cell--align-end-xl' : ''}${props.alignEndXxl ? ' grid-cell--align-end-xxl' : ''}${props.alignEndXxxl ? ' grid-cell--align-end-xxxl' : ''}

			${props.alignStretchXxs ? ' grid-cell--align-stretch-xxs' : ''}${props.alignStretchXs ? ' grid-cell--align-stretch-xs' : ''}${props.alignStretchSm ? ' grid-cell--align-stretch-sm' : ''}${props.alignStretchMd ? ' grid-cell--align-stretch-md' : ''}${props.alignStretchLg ? ' grid-cell--align-stretch-lg' : ''}${props.alignStretchXl ? ' grid-cell--align-stretch-xl' : ''}${props.alignStretchXxl ? ' grid-cell--align-stretch-xxl' : ''}${props.alignStretchXxxl ? ' grid-cell--align-stretch-xxxl' : ''}
		`
		
	})

</script>

<style lang="scss">
	.grid-cell {
		grid-column-end:span 12;
		&--col-span-xxs-1 {
			grid-column-end:span 1;
		}
		&--col-span-xxs-2 {
			grid-column-end:span 2;
		}
		&--col-span-xxs-3 {
			grid-column-end:span 3;
		}
		&--col-span-xxs-4 {
			grid-column-end:span 4;
		}
		&--col-span-xxs-5 {
			grid-column-end:span 5;
		}
		&--col-span-xxs-6 {
			grid-column-end:span 6;
		}
		&--col-span-xxs-7 {
			grid-column-end:span 7;
		}
		&--col-span-xxs-8 {
			grid-column-end:span 8;
		}
		&--col-span-xxs-9 {
			grid-column-end:span 9;
		}
		&--col-span-xxs-10 {
			grid-column-end:span 10;
		}
		&--col-span-xxs-11 {
			grid-column-end:span 11;
		}
		&--col-span-xxs-12 {
			grid-column-end:span 12;
		}
		

		&--col-start-xxs-1 {
			grid-column-start:1;
		}
		&--col-start-xxs-2 {
			grid-column-start:2;
		}
		&--col-start-xxs-3 {
			grid-column-start:3;
		}
		&--col-start-xxs-4 {
			grid-column-start:4;
		}
		&--col-start-xxs-5 {
			grid-column-start:5;
		}
		&--col-start-xxs-6 {
			grid-column-start:6;
		}
		&--col-start-xxs-7 {
			grid-column-start:7;
		}
		&--col-start-xxs-8 {
			grid-column-start:8;
		}
		&--col-start-xxs-9 {
			grid-column-start:9;
		}
		&--col-start-xxs-10 {
			grid-column-start:10;
		}
		&--col-start-xxs-11 {
			grid-column-start:11;
		}
		&--col-start-xxs-12 {
			grid-column-start:12;
		}

		// rows

		&--row-span-xxs-1 {
			grid-row-end:span 1;
		}
		&--row-span-xxs-2 {
			grid-row-end:span 2;
		}
		&--row-span-xxs-3 {
			grid-row-end:span 3;
		}
		&--row-span-xxs-4 {
			grid-row-end:span 4;
		}
		&--row-span-xxs-5 {
			grid-row-end:span 5;
		}
		&--row-span-xxs-6 {
			grid-row-end:span 6;
		}
		&--row-span-xxs-7 {
			grid-row-end:span 7;
		}
		&--row-span-xxs-8 {
			grid-row-end:span 8;
		}
		&--row-span-xxs-9 {
			grid-row-end:span 9;
		}
		&--row-span-xxs-10 {
			grid-row-end:span 10;
		}
		&--row-span-xxs-11 {
			grid-row-end:span 11;
		}
		&--row-span-xxs-12 {
			grid-row-end:span 12;
		}
		

		&--row-start-xxs-1 {
			grid-row-start:1;
		}
		&--row-start-xxs-2 {
			grid-row-start:2;
		}
		&--row-start-xxs-3 {
			grid-row-start:3;
		}
		&--row-start-xxs-4 {
			grid-row-start:4;
		}
		&--row-start-xxs-5 {
			grid-row-start:5;
		}
		&--row-start-xxs-6 {
			grid-row-start:6;
		}
		&--row-start-xxs-7 {
			grid-row-start:7;
		}
		&--row-start-xxs-8 {
			grid-row-start:8;
		}
		&--row-start-xxs-9 {
			grid-row-start:9;
		}
		&--row-start-xxs-10 {
			grid-row-start:10;
		}
		&--row-start-xxs-11 {
			grid-row-start:11;
		}
		&--row-start-xxs-12 {
			grid-row-start:12;
		}


		&--align-center-xxs {
			align-self: center;
		}

		&--align-start-xxs {
			align-self: start;
		}

		&--align-end-xxs {
			align-self: end;
		}

		&--align-stretch-xxs {
			align-self: stretch;
		}


		@include breakpoint(xs) {

			&--col-span-xs-1 {
				grid-column-end:span 1;
			}
			&--col-span-xs-2 {
				grid-column-end:span 2;
			}
			&--col-span-xs-3 {
				grid-column-end:span 3;
			}
			&--col-span-xs-4 {
				grid-column-end:span 4;
			}
			&--col-span-xs-5 {
				grid-column-end:span 5;
			}
			&--col-span-xs-6 {
				grid-column-end:span 6;
			}
			&--col-span-xs-7 {
				grid-column-end:span 7;
			}
			&--col-span-xs-8 {
				grid-column-end:span 8;
			}
			&--col-span-xs-9 {
				grid-column-end:span 9;
			}
			&--col-span-xs-10 {
				grid-column-end:span 10;
			}
			&--col-span-xs-11 {
				grid-column-end:span 11;
			}
			&--col-span-xs-12 {
				grid-column-end:span 12;
			}
			

			&--col-start-xs-1 {
				grid-column-start:1;
			}
			&--col-start-xs-2 {
				grid-column-start:2;
			}
			&--col-start-xs-3 {
				grid-column-start:3;
			}
			&--col-start-xs-4 {
				grid-column-start:4;
			}
			&--col-start-xs-5 {
				grid-column-start:5;
			}
			&--col-start-xs-6 {
				grid-column-start:6;
			}
			&--col-start-xs-7 {
				grid-column-start:7;
			}
			&--col-start-xs-8 {
				grid-column-start:8;
			}
			&--col-start-xs-9 {
				grid-column-start:9;
			}
			&--col-start-xs-10 {
				grid-column-start:10;
			}
			&--col-start-xs-11 {
				grid-column-start:11;
			}
			&--col-start-xs-12 {
				grid-column-start:12;
			}

			// rows

			&--row-span-xs-1 {
				grid-row-end:span 1;
			}
			&--row-span-xs-2 {
				grid-row-end:span 2;
			}
			&--row-span-xs-3 {
				grid-row-end:span 3;
			}
			&--row-span-xs-4 {
				grid-row-end:span 4;
			}
			&--row-span-xs-5 {
				grid-row-end:span 5;
			}
			&--row-span-xs-6 {
				grid-row-end:span 6;
			}
			&--row-span-xs-7 {
				grid-row-end:span 7;
			}
			&--row-span-xs-8 {
				grid-row-end:span 8;
			}
			&--row-span-xs-9 {
				grid-row-end:span 9;
			}
			&--row-span-xs-10 {
				grid-row-end:span 10;
			}
			&--row-span-xs-11 {
				grid-row-end:span 11;
			}
			&--row-span-xs-12 {
				grid-row-end:span 12;
			}
			

			&--row-start-xs-1 {
				grid-row-start:1;
			}
			&--row-start-xs-2 {
				grid-row-start:2;
			}
			&--row-start-xs-3 {
				grid-row-start:3;
			}
			&--row-start-xs-4 {
				grid-row-start:4;
			}
			&--row-start-xs-5 {
				grid-row-start:5;
			}
			&--row-start-xs-6 {
				grid-row-start:6;
			}
			&--row-start-xs-7 {
				grid-row-start:7;
			}
			&--row-start-xs-8 {
				grid-row-start:8;
			}
			&--row-start-xs-9 {
				grid-row-start:9;
			}
			&--row-start-xs-10 {
				grid-row-start:10;
			}
			&--row-start-xs-11 {
				grid-row-start:11;
			}
			&--row-start-xs-12 {
				grid-row-start:12;
			}

			&--align-center-xs {
				align-self: center;
			}

			&--align-start-xs {
				align-self: start;
			}

			&--align-end-xs {
				align-self: end;
			}

			&--align-stretch-xs {
				align-self: stretch;
			}
		}



		@include breakpoint(sm) {

			&--col-span-sm-1 {
				grid-column-end:span 1;
			}
			&--col-span-sm-2 {
				grid-column-end:span 2;
			}
			&--col-span-sm-3 {
				grid-column-end:span 3;
			}
			&--col-span-sm-4 {
				grid-column-end:span 4;
			}
			&--col-span-sm-5 {
				grid-column-end:span 5;
			}
			&--col-span-sm-6 {
				grid-column-end:span 6;
			}
			&--col-span-sm-7 {
				grid-column-end:span 7;
			}
			&--col-span-sm-8 {
				grid-column-end:span 8;
			}
			&--col-span-sm-9 {
				grid-column-end:span 9;
			}
			&--col-span-sm-10 {
				grid-column-end:span 10;
			}
			&--col-span-sm-11 {
				grid-column-end:span 11;
			}
			&--col-span-sm-12 {
				grid-column-end:span 12;
			}
			

			&--col-start-sm-1 {
				grid-column-start:1;
			}
			&--col-start-sm-2 {
				grid-column-start:2;
			}
			&--col-start-sm-3 {
				grid-column-start:3;
			}
			&--col-start-sm-4 {
				grid-column-start:4;
			}
			&--col-start-sm-5 {
				grid-column-start:5;
			}
			&--col-start-sm-6 {
				grid-column-start:6;
			}
			&--col-start-sm-7 {
				grid-column-start:7;
			}
			&--col-start-sm-8 {
				grid-column-start:8;
			}
			&--col-start-sm-9 {
				grid-column-start:9;
			}
			&--col-start-sm-10 {
				grid-column-start:10;
			}
			&--col-start-sm-11 {
				grid-column-start:11;
			}
			&--col-start-sm-12 {
				grid-column-start:12;
			}

			// row

			&--row-span-sm-1 {
				grid-row-end:span 1;
			}
			&--row-span-sm-2 {
				grid-row-end:span 2;
			}
			&--row-span-sm-3 {
				grid-row-end:span 3;
			}
			&--row-span-sm-4 {
				grid-row-end:span 4;
			}
			&--row-span-sm-5 {
				grid-row-end:span 5;
			}
			&--row-span-sm-6 {
				grid-row-end:span 6;
			}
			&--row-span-sm-7 {
				grid-row-end:span 7;
			}
			&--row-span-sm-8 {
				grid-row-end:span 8;
			}
			&--row-span-sm-9 {
				grid-row-end:span 9;
			}
			&--row-span-sm-10 {
				grid-row-end:span 10;
			}
			&--row-span-sm-11 {
				grid-row-end:span 11;
			}
			&--row-span-sm-12 {
				grid-row-end:span 12;
			}
			

			&--row-start-sm-1 {
				grid-row-start:1;
			}
			&--row-start-sm-2 {
				grid-row-start:2;
			}
			&--row-start-sm-3 {
				grid-row-start:3;
			}
			&--row-start-sm-4 {
				grid-row-start:4;
			}
			&--row-start-sm-5 {
				grid-row-start:5;
			}
			&--row-start-sm-6 {
				grid-row-start:6;
			}
			&--row-start-sm-7 {
				grid-row-start:7;
			}
			&--row-start-sm-8 {
				grid-row-start:8;
			}
			&--row-start-sm-9 {
				grid-row-start:9;
			}
			&--row-start-sm-10 {
				grid-row-start:10;
			}
			&--row-start-sm-11 {
				grid-row-start:11;
			}
			&--row-start-sm-12 {
				grid-row-start:12;
			}

			&--align-center-sm {
				align-self: center;
			}

			&--align-start-sm {
				align-self: start;
			}

			&--align-end-sm {
				align-self: end;
			}

			&--align-stretch-sm {
				align-self: stretch;
			}
		}

		@include breakpoint(md) {

			&--col-span-md-1 {
				grid-column-end:span 1;
			}
			&--col-span-md-2 {
				grid-column-end:span 2;
			}
			&--col-span-md-3 {
				grid-column-end:span 3;
			}
			&--col-span-md-4 {
				grid-column-end:span 4;
			}
			&--col-span-md-5 {
				grid-column-end:span 5;
			}
			&--col-span-md-6 {
				grid-column-end:span 6;
			}
			&--col-span-md-7 {
				grid-column-end:span 7;
			}
			&--col-span-md-8 {
				grid-column-end:span 8;
			}
			&--col-span-md-9 {
				grid-column-end:span 9;
			}
			&--col-span-md-10 {
				grid-column-end:span 10;
			}
			&--col-span-md-11 {
				grid-column-end:span 11;
			}
			&--col-span-md-12 {
				grid-column-end:span 12;
			}
			

			&--col-start-md-1 {
				grid-column-start:1;
			}
			&--col-start-md-2 {
				grid-column-start:2;
			}
			&--col-start-md-3 {
				grid-column-start:3;
			}
			&--col-start-md-4 {
				grid-column-start:4;
			}
			&--col-start-md-5 {
				grid-column-start:5;
			}
			&--col-start-md-6 {
				grid-column-start:6;
			}
			&--col-start-md-7 {
				grid-column-start:7;
			}
			&--col-start-md-8 {
				grid-column-start:8;
			}
			&--col-start-md-9 {
				grid-column-start:9;
			}
			&--col-start-md-10 {
				grid-column-start:10;
			}
			&--col-start-md-11 {
				grid-column-start:11;
			}
			&--col-start-md-12 {
				grid-column-start:12;
			}

			//rows

			&--row-span-md-1 {
				grid-row-end:span 1;
			}
			&--row-span-md-2 {
				grid-row-end:span 2;
			}
			&--row-span-md-3 {
				grid-row-end:span 3;
			}
			&--row-span-md-4 {
				grid-row-end:span 4;
			}
			&--row-span-md-5 {
				grid-row-end:span 5;
			}
			&--row-span-md-6 {
				grid-row-end:span 6;
			}
			&--row-span-md-7 {
				grid-row-end:span 7;
			}
			&--row-span-md-8 {
				grid-row-end:span 8;
			}
			&--row-span-md-9 {
				grid-row-end:span 9;
			}
			&--row-span-md-10 {
				grid-row-end:span 10;
			}
			&--row-span-md-11 {
				grid-row-end:span 11;
			}
			&--row-span-md-12 {
				grid-row-end:span 12;
			}
			

			&--row-start-md-1 {
				grid-row-start:1;
			}
			&--row-start-md-2 {
				grid-row-start:2;
			}
			&--row-start-md-3 {
				grid-row-start:3;
			}
			&--row-start-md-4 {
				grid-row-start:4;
			}
			&--row-start-md-5 {
				grid-row-start:5;
			}
			&--row-start-md-6 {
				grid-row-start:6;
			}
			&--row-start-md-7 {
				grid-row-start:7;
			}
			&--row-start-md-8 {
				grid-row-start:8;
			}
			&--row-start-md-9 {
				grid-row-start:9;
			}
			&--row-start-md-10 {
				grid-row-start:10;
			}
			&--row-start-md-11 {
				grid-row-start:11;
			}
			&--row-start-md-12 {
				grid-row-start:12;
			}

			&--align-center-md {
				align-self: center;
			}

			&--align-start-md {
				align-self: start;
			}

			&--align-end-md {
				align-self: end;
			}

			&--align-stretch-md {
				align-self: stretch;
			}
		}

		@include breakpoint(lg) {

			&--col-span-lg-1 {
				grid-column-end:span 1;
			}
			&--col-span-lg-2 {
				grid-column-end:span 2;
			}
			&--col-span-lg-3 {
				grid-column-end:span 3;
			}
			&--col-span-lg-4 {
				grid-column-end:span 4;
			}
			&--col-span-lg-5 {
				grid-column-end:span 5;
			}
			&--col-span-lg-6 {
				grid-column-end:span 6;
			}
			&--col-span-lg-7 {
				grid-column-end:span 7;
			}
			&--col-span-lg-8 {
				grid-column-end:span 8;
			}
			&--col-span-lg-9 {
				grid-column-end:span 9;
			}
			&--col-span-lg-10 {
				grid-column-end:span 10;
			}
			&--col-span-lg-11 {
				grid-column-end:span 11;
			}
			&--col-span-lg-12 {
				grid-column-end:span 12;
			}
			

			&--col-start-lg-1 {
				grid-column-start:1;
			}
			&--col-start-lg-2 {
				grid-column-start:2;
			}
			&--col-start-lg-3 {
				grid-column-start:3;
			}
			&--col-start-lg-4 {
				grid-column-start:4;
			}
			&--col-start-lg-5 {
				grid-column-start:5;
			}
			&--col-start-lg-6 {
				grid-column-start:6;
			}
			&--col-start-lg-7 {
				grid-column-start:7;
			}
			&--col-start-lg-8 {
				grid-column-start:8;
			}
			&--col-start-lg-9 {
				grid-column-start:9;
			}
			&--col-start-lg-10 {
				grid-column-start:10;
			}
			&--col-start-lg-11 {
				grid-column-start:11;
			}
			&--col-start-lg-12 {
				grid-column-start:12;
			}

			// rows

			&--row-span-lg-1 {
				grid-row-end:span 1;
			}
			&--row-span-lg-2 {
				grid-row-end:span 2;
			}
			&--row-span-lg-3 {
				grid-row-end:span 3;
			}
			&--row-span-lg-4 {
				grid-row-end:span 4;
			}
			&--row-span-lg-5 {
				grid-row-end:span 5;
			}
			&--row-span-lg-6 {
				grid-row-end:span 6;
			}
			&--row-span-lg-7 {
				grid-row-end:span 7;
			}
			&--row-span-lg-8 {
				grid-row-end:span 8;
			}
			&--row-span-lg-9 {
				grid-row-end:span 9;
			}
			&--row-span-lg-10 {
				grid-row-end:span 10;
			}
			&--row-span-lg-11 {
				grid-row-end:span 11;
			}
			&--row-span-lg-12 {
				grid-row-end:span 12;
			}
			

			&--row-start-lg-1 {
				grid-row-start:1;
			}
			&--row-start-lg-2 {
				grid-row-start:2;
			}
			&--row-start-lg-3 {
				grid-row-start:3;
			}
			&--row-start-lg-4 {
				grid-row-start:4;
			}
			&--row-start-lg-5 {
				grid-row-start:5;
			}
			&--row-start-lg-6 {
				grid-row-start:6;
			}
			&--row-start-lg-7 {
				grid-row-start:7;
			}
			&--row-start-lg-8 {
				grid-row-start:8;
			}
			&--row-start-lg-9 {
				grid-row-start:9;
			}
			&--row-start-lg-10 {
				grid-row-start:10;
			}
			&--row-start-lg-11 {
				grid-row-start:11;
			}
			&--row-start-lg-12 {
				grid-row-start:12;
			}

			&--align-center-lg {
				align-self: center;
			}

			&--align-start-lg {
				align-self: start;
			}

			&--align-end-lg {
				align-self: end;
			}

			&--align-stretch-lg {
				align-self: stretch;
			}
		}


		@include breakpoint(xl) {

			&--col-span-xl-1 {
				grid-column-end:span 1;
			}
			&--col-span-xl-2 {
				grid-column-end:span 2;
			}
			&--col-span-xl-3 {
				grid-column-end:span 3;
			}
			&--col-span-xl-4 {
				grid-column-end:span 4;
			}
			&--col-span-xl-5 {
				grid-column-end:span 5;
			}
			&--col-span-xl-6 {
				grid-column-end:span 6;
			}
			&--col-span-xl-7 {
				grid-column-end:span 7;
			}
			&--col-span-xl-8 {
				grid-column-end:span 8;
			}
			&--col-span-xl-9 {
				grid-column-end:span 9;
			}
			&--col-span-xl-10 {
				grid-column-end:span 10;
			}
			&--col-span-xl-11 {
				grid-column-end:span 11;
			}
			&--col-span-xl-12 {
				grid-column-end:span 12;
			}
			

			&--col-start-xl-1 {
				grid-column-start:1;
			}
			&--col-start-xl-2 {
				grid-column-start:2;
			}
			&--col-start-xl-3 {
				grid-column-start:3;
			}
			&--col-start-xl-4 {
				grid-column-start:4;
			}
			&--col-start-xl-5 {
				grid-column-start:5;
			}
			&--col-start-xl-6 {
				grid-column-start:6;
			}
			&--col-start-xl-7 {
				grid-column-start:7;
			}
			&--col-start-xl-8 {
				grid-column-start:8;
			}
			&--col-start-xl-9 {
				grid-column-start:9;
			}
			&--col-start-xl-10 {
				grid-column-start:10;
			}
			&--col-start-xl-11 {
				grid-column-start:11;
			}
			&--col-start-xl-12 {
				grid-column-start:12;
			}
			// rows
			&--row-span-xl-1 {
				grid-row-end:span 1;
			}
			&--row-span-xl-2 {
				grid-row-end:span 2;
			}
			&--row-span-xl-3 {
				grid-row-end:span 3;
			}
			&--row-span-xl-4 {
				grid-row-end:span 4;
			}
			&--row-span-xl-5 {
				grid-row-end:span 5;
			}
			&--row-span-xl-6 {
				grid-row-end:span 6;
			}
			&--row-span-xl-7 {
				grid-row-end:span 7;
			}
			&--row-span-xl-8 {
				grid-row-end:span 8;
			}
			&--row-span-xl-9 {
				grid-row-end:span 9;
			}
			&--row-span-xl-10 {
				grid-row-end:span 10;
			}
			&--row-span-xl-11 {
				grid-row-end:span 11;
			}
			&--row-span-xl-12 {
				grid-row-end:span 12;
			}
			

			&--row-start-xl-1 {
				grid-row-start:1;
			}
			&--row-start-xl-2 {
				grid-row-start:2;
			}
			&--row-start-xl-3 {
				grid-row-start:3;
			}
			&--row-start-xl-4 {
				grid-row-start:4;
			}
			&--row-start-xl-5 {
				grid-row-start:5;
			}
			&--row-start-xl-6 {
				grid-row-start:6;
			}
			&--row-start-xl-7 {
				grid-row-start:7;
			}
			&--row-start-xl-8 {
				grid-row-start:8;
			}
			&--row-start-xl-9 {
				grid-row-start:9;
			}
			&--row-start-xl-10 {
				grid-row-start:10;
			}
			&--row-start-xl-11 {
				grid-row-start:11;
			}
			&--row-start-xl-12 {
				grid-row-start:12;
			}

			&--align-center-xl {
				align-self: center;
			}

			&--align-start-xl {
				align-self: start;
			}

			&--align-end-xl {
				align-self: end;
			}

			&--align-stretch-xl {
				align-self: stretch;
			}
		}


		@include breakpoint(xxl) {

			&--col-span-xxl-1 {
				grid-column-end:span 1;
			}
			&--col-span-xxl-2 {
				grid-column-end:span 2;
			}
			&--col-span-xxl-3 {
				grid-column-end:span 3;
			}
			&--col-span-xxl-4 {
				grid-column-end:span 4;
			}
			&--col-span-xxl-5 {
				grid-column-end:span 5;
			}
			&--col-span-xxl-6 {
				grid-column-end:span 6;
			}
			&--col-span-xxl-7 {
				grid-column-end:span 7;
			}
			&--col-span-xxl-8 {
				grid-column-end:span 8;
			}
			&--col-span-xxl-9 {
				grid-column-end:span 9;
			}
			&--col-span-xxl-10 {
				grid-column-end:span 10;
			}
			&--col-span-xxl-11 {
				grid-column-end:span 11;
			}
			&--col-span-xxl-12 {
				grid-column-end:span 12;
			}
			

			&--col-start-xxl-1 {
				grid-column-start:1;
			}
			&--col-start-xxl-2 {
				grid-column-start:2;
			}
			&--col-start-xxl-3 {
				grid-column-start:3;
			}
			&--col-start-xxl-4 {
				grid-column-start:4;
			}
			&--col-start-xxl-5 {
				grid-column-start:5;
			}
			&--col-start-xxl-6 {
				grid-column-start:6;
			}
			&--col-start-xxl-7 {
				grid-column-start:7;
			}
			&--col-start-xxl-8 {
				grid-column-start:8;
			}
			&--col-start-xxl-9 {
				grid-column-start:9;
			}
			&--col-start-xxl-10 {
				grid-column-start:10;
			}
			&--col-start-xxl-11 {
				grid-column-start:11;
			}
			&--col-start-xxl-12 {
				grid-column-start:12;
			}
			// rows

			&--row-span-xxl-1 {
				grid-row-end:span 1;
			}
			&--row-span-xxl-2 {
				grid-row-end:span 2;
			}
			&--row-span-xxl-3 {
				grid-row-end:span 3;
			}
			&--row-span-xxl-4 {
				grid-row-end:span 4;
			}
			&--row-span-xxl-5 {
				grid-row-end:span 5;
			}
			&--row-span-xxl-6 {
				grid-row-end:span 6;
			}
			&--row-span-xxl-7 {
				grid-row-end:span 7;
			}
			&--row-span-xxl-8 {
				grid-row-end:span 8;
			}
			&--row-span-xxl-9 {
				grid-row-end:span 9;
			}
			&--row-span-xxl-10 {
				grid-row-end:span 10;
			}
			&--row-span-xxl-11 {
				grid-row-end:span 11;
			}
			&--row-span-xxl-12 {
				grid-row-end:span 12;
			}
			

			&--row-start-xxl-1 {
				grid-row-start:1;
			}
			&--row-start-xxl-2 {
				grid-row-start:2;
			}
			&--row-start-xxl-3 {
				grid-row-start:3;
			}
			&--row-start-xxl-4 {
				grid-row-start:4;
			}
			&--row-start-xxl-5 {
				grid-row-start:5;
			}
			&--row-start-xxl-6 {
				grid-row-start:6;
			}
			&--row-start-xxl-7 {
				grid-row-start:7;
			}
			&--row-start-xxl-8 {
				grid-row-start:8;
			}
			&--row-start-xxl-9 {
				grid-row-start:9;
			}
			&--row-start-xxl-10 {
				grid-row-start:10;
			}
			&--row-start-xxl-11 {
				grid-row-start:11;
			}
			&--row-start-xxl-12 {
				grid-row-start:12;
			}

			&--align-center-xxl {
				align-self: center;
			}

			&--align-start-xxl {
				align-self: start;
			}

			&--align-end-xxl {
				align-self: end;
			}

			&--align-stretch-xxl {
				align-self: stretch;
			}
		}


		@include breakpoint(xxxl) {

			&--col-span-xxxl-1 {
				grid-column-end:span 1;
			}
			&--col-span-xxxl-2 {
				grid-column-end:span 2;
			}
			&--col-span-xxxl-3 {
				grid-column-end:span 3;
			}
			&--col-span-xxxl-4 {
				grid-column-end:span 4;
			}
			&--col-span-xxxl-5 {
				grid-column-end:span 5;
			}
			&--col-span-xxxl-6 {
				grid-column-end:span 6;
			}
			&--col-span-xxxl-7 {
				grid-column-end:span 7;
			}
			&--col-span-xxxl-8 {
				grid-column-end:span 8;
			}
			&--col-span-xxxl-9 {
				grid-column-end:span 9;
			}
			&--col-span-xxxl-10 {
				grid-column-end:span 10;
			}
			&--col-span-xxxl-11 {
				grid-column-end:span 11;
			}
			&--col-span-xxxl-12 {
				grid-column-end:span 12;
			}
			

			&--col-start-xxxl-1 {
				grid-column-start:1;
			}
			&--col-start-xxxl-2 {
				grid-column-start:2;
			}
			&--col-start-xxxl-3 {
				grid-column-start:3;
			}
			&--col-start-xxxl-4 {
				grid-column-start:4;
			}
			&--col-start-xxxl-5 {
				grid-column-start:5;
			}
			&--col-start-xxxl-6 {
				grid-column-start:6;
			}
			&--col-start-xxxl-7 {
				grid-column-start:7;
			}
			&--col-start-xxxl-8 {
				grid-column-start:8;
			}
			&--col-start-xxxl-9 {
				grid-column-start:9;
			}
			&--col-start-xxxl-10 {
				grid-column-start:10;
			}
			&--col-start-xxxl-11 {
				grid-column-start:11;
			}
			&--col-start-xxxl-12 {
				grid-column-start:12;
			}

			//rows
			&--row-span-xxxl-1 {
				grid-row-end:span 1;
			}
			&--row-span-xxxl-2 {
				grid-row-end:span 2;
			}
			&--row-span-xxxl-3 {
				grid-row-end:span 3;
			}
			&--row-span-xxxl-4 {
				grid-row-end:span 4;
			}
			&--row-span-xxxl-5 {
				grid-row-end:span 5;
			}
			&--row-span-xxxl-6 {
				grid-row-end:span 6;
			}
			&--row-span-xxxl-7 {
				grid-row-end:span 7;
			}
			&--row-span-xxxl-8 {
				grid-row-end:span 8;
			}
			&--row-span-xxxl-9 {
				grid-row-end:span 9;
			}
			&--row-span-xxxl-10 {
				grid-row-end:span 10;
			}
			&--row-span-xxxl-11 {
				grid-row-end:span 11;
			}
			&--row-span-xxxl-12 {
				grid-row-end:span 12;
			}
			

			&--row-start-xxxl-1 {
				grid-row-start:1;
			}
			&--row-start-xxxl-2 {
				grid-row-start:2;
			}
			&--row-start-xxxl-3 {
				grid-row-start:3;
			}
			&--row-start-xxxl-4 {
				grid-row-start:4;
			}
			&--row-start-xxxl-5 {
				grid-row-start:5;
			}
			&--row-start-xxxl-6 {
				grid-row-start:6;
			}
			&--row-start-xxxl-7 {
				grid-row-start:7;
			}
			&--row-start-xxxl-8 {
				grid-row-start:8;
			}
			&--row-start-xxxl-9 {
				grid-row-start:9;
			}
			&--row-start-xxxl-10 {
				grid-row-start:10;
			}
			&--row-start-xxxl-11 {
				grid-row-start:11;
			}
			&--row-start-xxxl-12 {
				grid-row-start:12;
			}

			&--align-center-xxxl {
				align-self: center;
			}

			&--align-start-xxxl {
				align-self: start;
			}

			&--align-end-xxxl {
				align-self: end;
			}

			&--align-stretch-xxxl {
				align-self: stretch;
			}
		}
	}

</style>