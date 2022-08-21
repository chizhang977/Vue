<template>
    <h2>当前求和为:{{sum}}</h2>
    <button @click="sum++">点我+1</button>
    <hr/>
    <h2>当前的信息为:{{msg}}</h2>
    <button @click="msg+='!'">修改信息</button>
    <hr/>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <h2>薪资：{{person.job.j1.salary}}</h2>
    <button @click="person.name+='~'">修改姓名</button>
    <button @click="person.age++">增长年龄</button>
    <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
import { reactive , ref , watch} from 'vue'
    
    export default {
        name:'Demo',
        setup(){
            //data
            let sum = ref(0)
            let msg = ref('你好啊')
            let person = reactive({
                name:'张三',
                age:18,
                job:{
                    j1:{
                        salary:20
                    }
                }
            })
            // 情况1,监视ref所定义的一个响应式数据,可以监听成功,setup中的this为undefined所以应该使用箭头函数
           /*  watch(sum,(newValue,oldValue)=>{
                console.log('sum变了',newValue,oldValue)
            },{immediate:true}) */

            // 情况2,监视ref所定义的多个响应式数据，可以监听成功
            watch([sum,msg],(newValue,oldValue)=>{
                  console.log('sum或msg变了',newValue,oldValue)
            },{immediate:true})

            // 情况3,监听reactive所定义的的一个响应式数据的全部属性
            // 1，注意:此处无法正确的获取oldValue
            // 2,强制开启了深度监视
         /*    watch(person,(newValue,oldValue)=>{
                console.log('person变了',newValue,oldValue)
            },{deep:false})//deep此处配置无效 */

            // 情况4,监视reactive所定义的一个响应式数据中的某个属性
            /* watch(()=>person.name,(newValue,oldValue)=>{
                 console.log('person.name变了',newValue,oldValue)
            }) */

            // 情况5,监视reactive所定义的数据中某些属性
            //  watch([()=>person.name,()=>person.age],(newValue,oldValue)=>{
            //      console.log('person.name变了',newValue,oldValue)
            // }) 

            //特殊情况
              watch([()=>person.job],(newValue,oldValue)=>{
                 console.log('person.job变了',newValue,oldValue)
            },{deep:true}) 


            return {
                sum,msg,person
            }
        }
    }
</script>

<style>

</style>