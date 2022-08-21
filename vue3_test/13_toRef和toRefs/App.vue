<template>
    <button @click="isShowDemo = !isShowDemo">隐藏/显示</button>
    <Demo v-if="isShowDemo"/>
    <hr/>
</template>

<script>
    import Demo from './components/Demo'
    import {ref} from 'vue'
    export default {
        name:'App',
        components:{Demo},
        setup(){
            let isShowDemo = ref(true)
            return {isShowDemo}
        }
    }
</script>
