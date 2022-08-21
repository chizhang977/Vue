<template>
  <div>
      <h2 @click="showName">学校名称:{{name}}</h2>
    <h2>学校地址:{{address}}</h2>
  </div>
</template>

<script>
    
    export default {
        name:'School',
        data(){
            return{
                name:'luas',
                address:'北京'
            }
        },
       
    }
</script>

<style>

</style>