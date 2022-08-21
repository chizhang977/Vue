<template>
    <h4>{{person}}</h4>
    <h2>姓名:{{name}}</h2>
    <h2>年龄:{{age}}</h2>
    <h2>薪资:{{job.j1.salary}}</h2>
    <h3 v-show="person.car">座驾信息:{{person.car}}</h3>
    <button @click="showRawPerson">输出最原始的数据person</button>
    <button @click="addCar">给人添加一台车</button>
    <button @click="person.car.name+='~'">换车名</button>
    <button @click="changePrice">换价格</button>
</template>

<script>
    import {markRaw, toRaw,reactive, readonly, ref, shallowReactive, shallowReadonly, shallowRef, toRef ,toRefs} from 'vue'
    export default {
        name:'Demo',
        setup(){
           let sum = ref(0)
           let person = reactive({
               name:'张三',
               age:19,
               job:{
                   j1:{
                       salary:20
                   }
               }
           })
           function showRawPerson(){
            //    toRaw的作用是将一个reactive生成的响应式对象-->普通对象
               const p = toRaw(person)
               p.age++
               console.log(p)
           }
           function addCar(){
               let car = {name:'奔驰',price:40}
            //    标记一个对象，使其永远不会成为响应式对象
               person.car = markRaw(car)
           }
           function changePrice(){
               person.car.price++
               console.log(person.car.price)
           }

           return {...toRefs(person),person,showRawPerson,changePrice,addCar}
    }

        
    }
</script>

