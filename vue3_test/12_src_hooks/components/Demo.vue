<template>
    <h2>当前求和为:{{sum}}</h2>
    <button @click="sum++">点我+1</button>
    <hr>
    <h2>当鼠标点击时:x:{{point.x}},y:{{point.y}}</h2>
</template>

<script>
    import {ref} from 'vue'
    import usePoint from '../hooks/usePoint'
    export default {
        name:'Demo',
        setup(){
            //data
            let sum = ref(0)
            let point = usePoint()

            return {sum,point}
        }
    }
</script>

