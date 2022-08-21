<template>
  <div class="child">我是Child组件</div>
  <Son/>
</template>

<script>
import Son from './Son.vue'
export default {
    name:'Child',
    components:{Son}
}
</script>

<style>
    .child{
        background-color: skyblue;
        padding: 10px;
    }
</style>