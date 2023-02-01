<template>
	<div class="hubspot-form" ref="container" v-once>
		<div class="hubspot-form__form" ref="formEl" :id="'form_'+form.formId"></div>
	</div>

</template>

<script setup>

	const props = defineProps({
		form: {
			required:true,
			type:Object
		},
		valueOverrides: {
			required:false,
			type:Array
		}
	});

	const container = ref(null);
	const formEl = ref(null);

	function createForm() {
		if (props.form?.formId && props.form?.portalId && props.form?.region && container.value && formEl.value) {
			const script = document.createElement("script");
		    script.src="https://js.hsforms.net/forms/v2.js";
		    container.value.prepend(script);
			script.addEventListener("load", () => {
				if (window.hbspt) {
					window.hbspt.forms.create({
						portalId: props.form?.portalId,
						formId: props.form?.formId,
						region:props.form?.region,
						target: '#form_'+props.form?.formId,

					})
				}
			});
		}
	};

	onMounted(() => {
		if (process.client) {
			createForm();
		}
	});


</script>


<style lang="scss">
	.hubspot-form {
		margin-bottom:vr(1);
	}
	// .hs-form {
	// 	position:relative;
	// 	background-color:transparent;
	// 	label {
	// 		display:block;
	// 		line-height:vr(1);
	// 		color:var(--contrast);
	// 	}
	// 	fieldset {
	// 		width:100% !important;
	// 		&.form-columns-2 {
	// 			margin-right:vr(-0.5);
	// 			margin-left:vr(-0.5);
	// 			max-width:none;
	// 			width:calc(100% + var(--baseline)) !important;
	// 			display:flex;
	// 			flex-wrap:wrap;
	// 			.hs-form-field {
					
	// 				float:none !important;
	// 				margin:0 vr(0.5);
	// 				width:calc(100% - var(--baseline)) !important;
	// 				@include breakpoint(md) {
	// 					width:calc(50% - var(--baseline)) !important;
	// 				}
	// 			}
	// 			.input {
					
	// 			}
	// 			@include breakpoint(md) {
					
	// 				.hs-form-field {
	// 					width:calc(50% - var(--baseline));
	// 					margin:0 vr(0.5) vr(1) vr(0.5);
	// 					display:inlineblock;
	// 				}
	// 			}
	// 		}
	// 	}

	// 	.form-columns-1, .form-columns-2 {
	// 		max-width:none !important;
	// 	}
	// }

	// .hs-fieldtype-intl-phone.hs-input {
	// 	display:flex;
	// 	align-items:center;
	// 	input {
	// 		flex:0 1 100%;
	// 	}
	// 	select {
	// 		flex:0 0 25%;
	// 		border-top-right-radius:0;
	// 		border-bottom-right-radius:0;
	// 		border-right:transparent;
	// 		& + input {
	// 			border-top-left-radius:0;
	// 			border-bottom-left-radius:0;
	// 		}
	// 	}
	// }


	// .hs-form-field {
	// 	position:relative;
	// 	margin-bottom:vr(1);
	// 	.input {
	// 		position:relative;
	// 		min-height:vr(2);
	// 		display:flex;
	// 		align-items: center;
	// 		margin-right:0 !important;
	// 		margin-left:0 !important;
	// 		.hs-input {
	// 			width:100% !important;
	// 		}
	// 	}
	// }

	// .hs-error-msgs {
	// 	display:block;
	// 	position:absolute;
	// 	list-style: none;
	// 	top:100%; left:0;
	// 	width:100%;
	// 	padding:0;
	// 	text-overflow:ellipsis;
	// 	overflow:hidden;
	// 	white-space: nowrap;
	// 	li {
	// 		padding-left:0;
	// 		display:inline;
	// 		overflow: hidden;
	// 		&::before {
	// 			display:none;
	// 		}
	// 	}
	// 	.hs-error-msg {
	// 		color:var(--primaryColor);
	// 		line-height:vr(1);
	// 		font-size:0.6rem;
	// 		white-space: nowrap;
	// 		text-overflow: ellipsis;
	// 		overflow: hidden;
	// 		max-width:100%;
	// 		display:block;
	// 	}
	// }

	// .hs-form input {
	// 	font-size:0.8rem;
	// 	line-height:vr(1);
	// 	color:var(--contrast);
	// 	&::placeholder {
	// 		color:var(--contrastSoft);
	// 		font-style:italic;
	// 	}
	// }

	// .hs-form input[type="text"],
	// .hs-form input[type="password"], 
	// .hs-form input[type="datetime"], 
	// .hs-form input[type="datetime-local"], 
	// .hs-form input[type="date"], 
	// .hs-form input[type="month"], 
	// .hs-form input[type="time"], 
	// .hs-form input[type="week"], 
	// .hs-form input[type="number"], 
	// .hs-form input[type="email"], 
	// .hs-form input[type="url"],  
	// .hs-form input[type="search"], 
	// .hs-form input[type="tel"], 
	// .hs-form textarea,
	// .hs-form select {
	// 	padding:0 vr(0.5);
	// 	line-height:vr(1);
	// 	vertical-align: middle;
	// 	display:block;
	// 	width:100%;
	// 	max-height:100%;
	// 	height:2rem;
	// 	min-height:36px;
	// 	border-radius:vr(1);
	// 	border:1px solid var(--contrastSoft);
	// 	font-family:$primary-typeface;
	// 	font-size:0.8rem;
	// 	line-height:vr(1);
	// 	color:var(--contrast);
	// 	&:focus {
	// 		outline:none;
	// 		border-color:var(--primaryColor);
	// 	}
	// }
	// .hs-fieldtype-textarea {
	// 	margin-bottom:vr(1.5);
	// }
	// .hs-form textarea {
	// 	height:auto;
	// 	min-height:vr(4);
	// 	margin-top:vr(0.25);
	// 	padding-top:vr(0.25); padding-bottom:vr(0.5);
	// }

	// .hs-richtext {
	// 	font-size:0.8rem;
	// 	color:var(--contrast);
	// 	lin-height:vr(1);
	// 	margin-bottom:vr(1);
	// }

	// .hs-form select {
	// 	text-overflow: ellipsis;
	// 	padding-right:vr(1.5);
	// 	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' preserveAspectRatio='true' vector-effect='non-scaling-stroke'%3E%3Cg class='nc-icon-wrapper' stroke-linecap='square' stroke-linejoin='miter' stroke-width='2' fill='none' stroke='%23FFFFFF' stroke-miterlimit='10'%3E%3Cpolyline points='2,7 12,17 22,7' transform='translate(0, 0)'%3E%3C/polyline%3E%3C/g%3E%3C/svg%3E");
	// 	background-position:right 1rem top 50%;
	// 	background-repeat: no-repeat;
	// 	background-size: 1rem;
		
	// }
	// .actions {
	// 	position:relative;
	// 	min-height:vr(2);
	// 	display:flex;
	// 	align-items: center;
	// 	margin-right:0 !important;
	// 	margin-left:0 !important;
 //    	height:vr(2);
 //    	margin-bottom:vr(1);
	// 	.hs-button {
	// 		padding:0 vr(0.75);
	// 		line-height:vr(1);
	// 		vertical-align: middle;
	// 		display:inline-block;
	// 		max-height:100%;
	// 		height:2rem;
	// 		min-height:36px;
	// 		border-radius:vr(1);
	// 		margin-bottom:0 !important;
	// 	    background-color:var(--contrast);
	// 	    color:var(--bg);
	// 	    font-weight:700;
	// 	    font-size:1rem;
	// 		transition:0.2s $ease-in-out-expo;
	// 		font-family:$primary-typeface;
	// 		white-space: nowrap;
	// 	    position:relative;
	// 	    &:hover {
	// 	    	transform:scale(1.1);
	// 	    }
	// 	    &:active {
	// 	    	transform:scale(0.95);
	// 	    	transition:0.1s $elastic;
	// 	    }
	// 	}
	// }

	// .input ul {
	// 	list-style: none;
	// 	margin-bottom:0;
	// }
	// .hs-form-field {
	// 	& > label {
	// 		//margin-bottom:vr(0.5);
	// 	}
	// }

	// .hs-form-checkbox, .hs-form-radio, .hs-form-booleancheckbox {
	// 	line-height:vr(1);
	// 	min-height:vr(1);
	// 	display:flex;
	// 	align-items:center;
	// 	margin-bottom:vr(0.5);
	// 	&:last-child {
	// 		margin-bottom:0;
	// 	}
	// 	label {
	// 		color:var(--contrast);
	// 		font-size:0.8rem;
	// 		display:block;
 //         line-height:vr(1);
 //         padding-left:vr(1.25);
 //         position:relative;
 //         cursor:pointer;
 //         position:relative;
	// 		span {
	// 			display:block;
	// 			&::after, &::before {
	// 				position:absolute;
	// 				left:0;
	// 				top:0;
	// 				content:"";
	// 				margin:calc(var(--baseline) * 0.25 / 2);
	// 				margin-left:0;
	// 				width:vr(0.75);
	// 				height:vr(0.75);
	// 				display:block;
	// 				background-color:transparent;
	// 				border:1px solid transparent;
	// 				box-sizing:border-box;
	//          }
	//          &::before {
	//             border-color:var(--contrastSoft);

	//          }

	//          &::after {
	// 				opacity:0;
	// 				background-size:1rem;
	// 				background-repeat:no-repeat;
	// 				background-position:center;
					
	// 				background-color:var(--primaryColor);
	// 				display:inline-block;
	// 				content:'';
	// 				transition:0.2s $elastic;
	// 				transform:scale(0.5);
	// 				background-size:1rem;
	// 				background-repeat:no-repeat;
	// 				background-position:center;
					
	// 				background-color:var(--primaryColor);
	// 				display:inline-block;
	// 				content:'';
	// 				mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24' viewBox='0 0 24 24'%3E%3Cg stroke-linecap='square' stroke-width='2' fill='none' stroke='black' stroke-linejoin='miter' class='nc-icon-wrapper' stroke-miterlimit='10'%3E%3Cpolyline points='6,12 10,16 18,8 '%3E%3C/polyline%3E%3C/g%3E%3C/svg%3E") center center no-repeat;
	//          }
	//       }
 //      }
 //      input {
	// 		position:absolute;
	// 		visibility: hidden;
	// 		right:-9999px;
	// 		&:checked + span {
	// 			&::after {
	// 				opacity:1;
	// 				transform:scale(1);
	// 			}
	// 		}
	// 	}
	// }

	// .hs-form-radio {
	// 	label {
	// 		span {
	// 			&::before {
	// 				border-radius:50%;
	//          }
	//          &::after {
	//             mask: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='6' cy='6' r='6' fill='%23000000'/%3E%3C/svg%3E%0A") center center no-repeat;

	//          }
	//       }
	// 	}
	// }
	// .hs-form-checkbox {
	// 	label {
	// 		span {
	//          &::after {
	//          	mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24' viewBox='0 0 24 24'%3E%3Cg stroke-linecap='square' stroke-width='2' fill='none' stroke='black' stroke-linejoin='miter' class='nc-icon-wrapper' stroke-miterlimit='10'%3E%3Cpolyline points='6,12 10,16 18,8 '%3E%3C/polyline%3E%3C/g%3E%3C/svg%3E") center center no-repeat;
					

	//          }
	//       }
	// 	}
	// }


	// .legal-consent-container {

	// 	.hs-form-booleancheckbox-display {
	// 		span {
	// 			margin-left:0 !important;
	// 		}
	// 	}
		
	// }




</style>
