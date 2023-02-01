<template>
	<div class="select" :class="{'select--disabled':disabled,'select--required':required,'select--invert':invert,'select--inline':inline,'select--minimal':minimal, 'select--focus':focus,'select--valid':valid}">
		<label :for="id" class="select__label" v-if="label">{{label}}</label>
		<div class="select__wrap">
			<select class="select__input" :id="id" :name="name" @input="updateValue">
				<option v-for="(option,i) in options" :key="'option-'+i" :value="option.value" :selected="option.value === modelValue">{{option.title}}</option>
			</select>
			<icon v-if="icon" name="icon"/>
		</div>
	</div>

</template>

<script setup>
	const props = defineProps({
		modelValue: {type:String},
		options:{type:Array,required:true},
		name:{type:String,required:true},
		label:{type:String},
		icon:{type:String},
		disabled:{type:Boolean},
		required:{type:Boolean},
		id:{type:String},
		invert: {type: Boolean},
        minimal: {type: Boolean},
        inline: {type: Boolean}
	})

	const focus = ref(null);
	const valid = ref(null);

	const emit = defineEmits(['update:modelValue'])

	function updateValue(event) {
		emit('update:modelValue', event.target.value)
	};

	function onBlur() {
		focus.value = false;
	}

	function onFocus() {
		focus.value = true;
	}

</script>

<style lang="scss">
	.select {
		&__label {
			display:block;
			font-weight:500;
			line-height: vr(1);
		}
		&__wrap {
			position:relative;
			height:vr(2);
			display:flex;
			align-items:center;
			&::before {
				position:absolute;
				top:50%;
				transform:translateY(-50%);
				height:2rem;
				max-height:100%;
				left:0;
				width:100%;
				display:block;
				content:"";
				
				pointer-events:none;
			}
			&::after {
				@include chev('down', 0.5rem, var(--primary));
				content:"";
				position:absolute;
				top:50%;
				margin-top:-0.5rem;
				right:vr(0.5);
				pointer-events:none;
			}
		}
		&__input {
			line-height:2rem;
			padding:0 vr(1.5) 0 vr(0.5);
			font-family:$body-font-family;
			font-size:1rem;
			height:2rem;
			color:var(--contrast);
			position:relative;
		}
		&--inline {
			display:flex;
			align-items:center;
			.select__label {
				margin-right:vr(0.5);
			}
		}
	}
</style>