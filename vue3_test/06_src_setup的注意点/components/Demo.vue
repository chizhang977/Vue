<template>
    <h1>一个人的信息</h1>
    <h2>姓名:{{person.name}}</h2>
    <h2>年龄:{{person.age}}</h2>
    <button @click="test">测试出发一下Dome组件的Hello事件</button>
    <slot name="cheng"></slot>
    <slot name="ting"></slot>
</template>

<script>
import { reactive } from '@vue/reactivity'
    export default {
        name:'Demo',
        props:['params1','params2'],
        emits:['hello'],
           beforeCreate() {
                console.log('beforeCreate钩子执行')
            },
        setup(props,context) {
            console.log('@@@',this)
            console.log('---setup-----',props)
            console.log('---setup-----',context)
            console.log('---setup-----',context.attrs)//相当于Vue2中的$attrs,如果从外部传过来的数据组件没有使用props接收，则会存在attrs中
            console.log('---setup-----',context.emit)//触发自定义事件
            console.log('---setup-----',context.slots)//插槽
            
          
            //data
            let person = reactive({
                name:'cheng',
                age:19
            })

            // 方法
            function test() {
                context.emit('hello',666)
            }

            // 要返回数据
            return{
                person,test
            }
        }
    }
</script>

