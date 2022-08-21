<template>
  <div class="child">我是Child组件</div>
    {{sum}}
</template>

<script>
import {ref} from 'vue'
export default {
    name:'Child',
    async setup(props) {
        let sum = ref(0)
        let p = new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve({sum})
            }, 3000);
        })
        return await p
    }
}
</script>

<style>
    .child{
        background-color: skyblue;
        padding: 10px;
    }
</style>