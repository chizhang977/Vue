<template>
  <div class="demo">
    <h2 >学校名称:{{name}}</h2>
    <h2>学校地址:{{address}}</h2>
  </div>
</template>

<script>
    import pubsub from 'pubsub-js';
    export default {
        name:'School',
        data(){
            return{
                name:'luas',
                address:'北京'
            }
        },
        mounted(){
            // console.log('School',this)
            // this.$bus.$on('hello',(data)=>{
            //     console.log('我是School组件，收到了数据',data)
            // })
            this.pubId = pubsub.subscribe('hello',(msgName,data)=>{
                console.log('有人发布hello消息,hello消息调回执行了',msgName,data)
            })
        },
        beforeDestroy(){
            // this.$bus.$off('hello')
            pubsub.unsubscribe(this.pubId)
        }
       
    }
</script>

<style scoped>
    .demo{
        background-color: skyblue;
    }
</style>