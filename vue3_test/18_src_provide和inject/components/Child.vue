<template>
    <div class="child">
          	<h3>我是Child组件(儿子)</h3>
            <Son/>
    </div>
</template>

<script>
import Son from '../components/Son.vue'
export default {
    name:'Child',
    components:{Son},
    
}
</script>
<style lang="css">
	.child{
		background-color: skyblue;
		padding: 10px;
	}
</style>
