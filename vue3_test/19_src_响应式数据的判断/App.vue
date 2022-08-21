<template>
    <div class="app">
	</div>
</template>

<script>
import { isProxy, isReactive, isReadonly, ref,isRef,reactive, readonly, toRefs } from '@vue/reactivity'
	export default{
		name:'App',
		setup(){
			let car = reactive({name:'奔驰',price:'40W'})
			let sum = ref(0)
			let car2 = readonly(car)

			console.log(isRef(sum))
			console.log(isReactive(car))
			console.log(isReadonly(car2))
			console.log(isProxy(car))
			console.log(isProxy(sum))

			return {...toRefs(car)}

		}
	}
</script>

<style lang="css">
	.app{
		background-color: gray;
		padding: 10px;
	}
</style>
