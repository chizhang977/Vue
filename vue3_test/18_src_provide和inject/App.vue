<template>
    <div class="app">
		<h3>我是App组件(老祖),{{name}}==={{price}}</h3>
		<Child/>
	</div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
import { provide } from '@vue/runtime-core'
import Child from './components/Child.vue'
	export default {
		name:'Demo',
		components:{Child},
		setup(){
			let car = reactive({
				name:'奔驰',
				price:'40W'
			})
			provide('car',car)
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
