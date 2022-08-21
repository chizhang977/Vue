<template>
  <Demo @hello="showHelloMsg" params1="apple" params2="banana">
    <template v-slot:cheng>
      <span>cheng</span>
    </template>
    <template v-slot:ting>
      <span>ting</span>
    </template>
  </Demo>

</template>

<script>
import Demo from './components/Demo'
export default {
  
  name: 'App',
  components:{Demo},
  setup(props) {
    function showHelloMsg(value) {
      alert(`你好啊，你触发了hello事件,我收到的参数是${value}`)
    }

    // 返回数据
    return {showHelloMsg}
  }
}
</script>

