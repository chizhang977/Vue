<template>
    <div class="app">
			<Child/>
	</div>
</template>

<script>
import Child from './components/Child'
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
