<template>
	<div :class="'social-share social-share--'+direction">
		<div class="social-share__options">
		     <ShareNetwork class="social-share__item" network="linkedin" :url="getUrl" :title="title" :description="description" :hastags="hashtags">
		        <social-icon name="linkedin"/>
		    </ShareNetwork>
		    <ShareNetwork class="social-share__item" network="twitter" :url="getUrl" :title="title" :description="description" :hastags="hashtags">
		        <social-icon name="twitter"/>
		    </ShareNetwork>
		      <ShareNetwork class="social-share__item" network="whatsapp" :url="getUrl" :title="title" :description="description" :hastags="hashtags">
		        <social-icon name="whatsapp"/>
		      </ShareNetwork>
		      <ShareNetwork class="social-share__item" network="email" :url="getUrl" :title="title" :description="description" :hastags="hashtags">
		        <social-icon name="email"/>
		    </ShareNetwork>
		</div>
	</div>
</template>


<script setup>
	const config = useRuntimeConfig();
	const route = useRoute();

		const props = defineProps({
			title: {
				required:false,
				default:''
			},
			url: {
				required:false
			},
			description: {
				required:false,
				default:''
			},
			hashtags: {
				required:false,
				default:''
			},
			direction: {
				required:false,
				default:'horizontal'
			}
		});
		const getUrl = computed(() => {
			if (props.url) {
				return props.url;
			} else {
				return config.baseUrl + route.fullPath;
			}
		});



</script>

<style lang="scss">

	.social-share {
		display:flex;
		align-items:middle;
		flex-wrap:wrap;
		margin-bottom:vr(1);
		&__options {
			display:flex;
			align-items:center;
			margin:0 calc(var(--baseline) * -1 + 1rem);
		}
		&__item {
			position:relative;
			color:var(--bg);
			.icon,.social-icon {
				position:absolute;
				transform:translate(-50%,-50%);
				top:50%; left:50%;
				transition:0.2s $ease-in-out-expo;
				color:currentColor;

			}
			
			width:vr(2); height:vr(2);
			&:hover {
				.icon, .social-icon {
					transform:translate(-50%,-50%) scale(1.1);

				}
				&::before {
					
				}
			}
		}
		&__label {
			display:block;
		}
		&--vertical {
			.social-share__options {
				@include breakpoint(lg) {
					flex-direction:column;
				}
			}
		}
	}

</style>