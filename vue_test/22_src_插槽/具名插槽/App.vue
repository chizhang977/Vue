<template>
  <div class="container">
    <Category title="美食">
      <img slot="center" src="http://s3.ax1x.com/2021/01/16/srJlq0.jpg">
      <a slot="footer" href="http://www.baidu.com">更多美食</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(g,index) in games" :key="index">{{g}}</li>
        
      </ul>
      <div class="foot" slot="footer">
          <a href="http://www.baidu.com">单击游戏</a>
          <a href="http://www.baidu.com">网络游戏</a>
        </div>
    </Category>
    <Category title="电影">
      <video controls  slot="center" src="https://haokan.baidu.com/v?pd=wisenatural&vid=10554454971571011271"></video>
      <template v-slot:footer>
        <div class="foot">
          <a href="http://www.baidu.com">经典</a>
          <a href="http://www.baidu.com">热门</a>
          <a href="http://www.baidu.com">推荐</a>
        </div>
      </template>
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
  .container,.foot{
    display: flex;
    justify-content: space-around;
  }
  
</style>


