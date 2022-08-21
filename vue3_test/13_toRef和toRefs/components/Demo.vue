<template>
    <h4>{{person}}</h4>
    <h2>姓名:{{person.name}}</h2>
    <h2>年龄:{{person.age}}</h2>
    <h2>薪资:{{person.job.j1.salary}}</h2>
    <button @click="person.name+='!'">修改姓名</button>
    <button @click="person.age++">增长年龄</button>
    <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
    import {reactive, ref, toRef ,toRefs} from 'vue'
    export default {
        name:'Demo',
        setup(){
            //data
            let person = reactive({
                name:'张三',
                age:18,
                job:{
                    j1:{
                        salary:20
                    }
                }
            })
            // const name1 = name
            // console.log('@',name1)

            // 创建了一个Ref对象，这个对象指向另一个对象的value值
            // const name2 = toRef(person,'name')
            // console.log(name2)

            // const x = toRefs(person)
            // console.log(x)

             return {
                 person,
                //  name:toRef(person,'name'),
                //  age:toRef(person,'age'),
                //  salary:toRef(person.job.j1,'salary')
                ...toRefs(person)
                    
                    }
        }
    }
</script>

