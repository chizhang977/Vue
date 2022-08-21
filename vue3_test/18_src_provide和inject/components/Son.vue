<template>
  	<div class="son">
      <h3>我是Son组件(大孙子),{{car.name}}==={{car.price}}</h3>
    </div>
</template>

<script>
import {inject} from 'vue'
export default {
    name:'Son',
    setup(props) {
        let car = inject('car')
        return {car}
    }
}
</script>
<style lang="css">
	.son{
		background-color: orange;
		padding: 10px;
	}
</style>
