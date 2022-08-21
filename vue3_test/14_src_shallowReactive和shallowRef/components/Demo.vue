<template>
    <h4>{{person}}</h4>
    <h2>姓名:{{person.name}}</h2>
    <h2>年龄:{{person.age}}</h2>
    <h2>薪资:{{person.job.j1.salary}}</h2>
    <h2 >x:{{x.y}}</h2>
    <button @click="person.name+='!'">修改姓名</button>
    <button @click="person.age++">增长年龄</button>
    <button @click="person.job.j1.salary++">涨薪</button>
    <button @click="x.y++">x佳佳</button>
</template>

<script>
    import {reactive, ref, shallowReactive, shallowRef, toRef ,toRefs} from 'vue'
    export default {
        name:'Demo',
        setup(){
            //data
            // shallowReactive只处理最外层属性的响应式
            let person = shallowReactive({
                name:'张三',
                age:18,
                job:{
                    j1:{
                        salary:20
                    }
                },

            })
            // 只处理基本数据类型的响应式,不进行对象的响应式
            let x = ref({
                y:0
            })

            console.log(x)
             return {
                 person,
                 x,
                ...toRefs(person)
                    
                    }
        }
    }
</script>

