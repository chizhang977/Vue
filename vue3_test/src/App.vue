<template>
    <div class="app">
		<h3>我是App组件</h3>
		<Suspense>
			<template v-slot:default>
				<Child/>
			</template>
			<template v-slot:fallback>
				<h3>稍等，加载中.....</h3>
			</template>
		</Suspense>
	</div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
// import Child from './components/Child.vue'
const Child = defineAsyncComponent(()=>import('./components/Child'))
 export default{
	 name:'App',
	 components:{Child}
 }
</script>

<style lang="css">
	.app{
		background-color: gray;
		padding: 10px;
	}
</style>
