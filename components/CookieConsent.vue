<template>
	<transition name="cookie-consent-transition">
			<div :class="'cookie-consent cookie-consent--'+position+' cookie-consent--'+display" v-if="show">
				<div class="cookie-consent__bg"></div>
				<div class="cookie-consent__dialogue align-left">
					<!-- <img src="~assets/images/other/cookie.png" alt="Cookies" title="Cookies" with="200" height="198" class="cookie-consent__cookie"> -->
					<div class="cookie-consent__message">
						<p class="no-margin"><strong>Cookies improve your experience on our website.</strong></p><p class="small no-margin">Are you okay with this? <nuxt-link to="/legal/privacy-policy">Privacy policy</nuxt-link>.</p>
					</div>
					<div class="cookie-consent__action">
						<v-button class="no-margin" weight="primary" @click.native="acceptCookieConsent" leading-icon="cookie">Okay</v-button>
						<v-button class="no-margin" v-if="declineAllowed" weight="tertiary" @click.native="declineCookieConsent">No cookies for me</v-button>
					</div>
				</div>
			</div>
		</transition>

</template>


<script setup>
	
	import { ref, computed, onMounted } from 'vue';

	const config = useRuntimeConfig();

	const props = defineProps({
		declineAllowed: {type:Boolean, default:false},
		privacyPolicyPath: {type:String, default:'/legal/privacy-policy'},
		position: {type:String, default:'bottom-left'}
	});

	let show = ref(false);
	
	const isCookieConsentAccepted = computed(() => {
		const storedAccept = localStorage.getItem('cookieConsentAccepted');
		console.log(storedAccept);
		let isAccepted = false;
		if (storedAccept === 'true' || storedAccept === true) {
			isAccepted = true;
		}
		return isAccepted;
	});

	function acceptCookieConsent() {
		localStorage.setItem('cookieConsentAccepted', true);
		show.value = false;
		allowTracking();
	};
	function declineCookieConsent() {
		localStorage.setItem('cookieConsentAccepted', false);
		show.value = false;
	};
	function showCookieConsent() {
		show.value = true;
	};
	function allowTracking() {
		let scripts = [];
	    let noscripts = [];
	    if (config.public.gtmId) {
	      scripts.push({
	        hid:'gtm',
	        children:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	          })(window,document,'script','dataLayer','${config.public.gtmId}');`,
	        type: 'text/javascript'
	      });
	      noscripts.push({
	        children:`<iframe src="https://www.googletagmanager.com/ns.html?id=${config.public.gtmId}"
	      height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
	      	body:true
	      });
	      useHead({
			script:scripts,
			noscript:noscripts
		  });
	      console.info('GTM is now enabled');
	    }

	};

	onMounted(() => {

		if (process.client) {
			if (isCookieConsentAccepted.value) {
				show.value = false;
				allowTracking();
			} else {
				show.value = true;
			}
		}
	})



</script>

<style lang="scss">
		.cookie-consent {
		position:fixed;
		z-index: 3000;
		bottom:0;
		left:0;
		width:100%;
		height:100%;
		display:flex;
		align-items: flex-end;
		justify-content: center;
		pointer-events:none;
		&__bg {
			display:none;
			position:absolute;
			top:0; left:0; width:100%; height:100%;
			background-color:rgba(0,0,0,0.5);
			pointer-events:none;

			// @include breakpoint(lg) {
			// 	background-color:transparent;
			// }
		}
		&__dialogue {
			position:relative;
			min-height:vr(2.5);
			
			padding:vr(0.25) vr(0.25);
			margin:vr(1);
			pointer-events:all;
			background-color: var(--bg);
			display:flex;
			align-items:stretch;

		}
		&__message {
			flex:0 1 100%;
			margin:vr(0.25);
		}
		&__action {
			flex:0 0 auto;
			margin:vr(0.25);
			align-self:stretch;
		}
		&__cookie {
			margin:0 auto vr(1) auto;
			display:block;
			width:vr(3);
		}
		&--top-left {
			@include breakpoint(lg) {
				align-items: flex-start;
				justify-content: flex-start;
			}
		}
		&--top-right {
			@include breakpoint(lg) {
				align-items: flex-start;
				justify-content: flex-end;
			}
		}
		&--bottom-left {
			@include breakpoint(lg) {
				align-items: flex-end;
				justify-content: flex-start;
			}
		}
		&--bottom-right {
			@include breakpoint(lg) {
				align-items: flex-end;
				justify-content: flex-end;
			}
		}
		&--stacked {

		}
		&--inline {
			.cookie-consent {
				&__dialogue {
					@include breakpoint(lg) {
						display:flex;
						align-items: center;
						max-width:800px;
						text-align:left;
					}
				}
			}
		}
	}

	// .cookie-consent-transition-enter-active {
	// 	transition:all 0.5s $ease-in-out-expo;
	// 	.cookie-consent__bg {
	// 		transition:0.5s $ease-in-out-expo;
	// 	}
	// 	.cookie-consent__dialogue {
	// 		transition:0.2s $elastic 0.2s;
	// 	}
	// }

	.cookie-consent-transition-leave-active {
		transition:all 0.5s $ease-in-out-expo;
		.cookie-consent__bg {
			transition:0.5s $ease-in-out-expo;
		}
		.cookie-consent__dialogue {
			transition:0.2s $elastic;
		}
	}

	.cookie-consent-transition-leave-to {
		.cookie-consent__bg {
			opacity:0;
		}
		.cookie-consent__dialogue {
			opacity:0;
			transform:scale(0.9);
		}
	}

</style>