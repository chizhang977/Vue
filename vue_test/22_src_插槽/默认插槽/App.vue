<template>
  <div class="container">
    <Category title="美食">
      <img src="http://s3.ax1x.com/2021/01/16/srJlq0.jpg">
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(g,index) in games" :key="index">{{g}}</li>
      </ul>
    </Category>
    <Category title="电影">
      <video controls src="https://haokan.baidu.com/v?pd=wisenatural&vid=10554454971571011271"></video>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category'
  export default {
    name:'App',
    components:{Category},
    data(){
      return{
        foods:['火锅','烧烤','小龙虾','牛排'],
        games:['红色金融','穿越火线','街舞团','超级玛丽'],
        films:['sss','教父','拆弹专家','你好李焕英']
      }
    }
    
  }
</script>

<style scoped>
  .container{
    display: flex;
    justify-content: space-around;
  }
</style>


