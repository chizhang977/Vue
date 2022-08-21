<template>
<!-- 展示用户列表 -->
    <div class="row">
      <div class="card" v-for="user in info.users" :key="user.login" v-show="info.users.length">
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.login}}</p>
      </div>
     <!-- 欢迎词 -->
     <h1 v-show="info.isFirst">欢迎使用</h1>
     <h1 v-show="info.isLoading">加载中.....</h1>
     <h1 v-show="info.errmsg">{{info.errmsg}}</h1>
     <!--  -->
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'List',
    data(){
        return{
            info:{
                isFirst:true,
                isLoading:false,
                errmsg:'',
                users:[]
            }
        }
    },
    mounted(){
      // 组件间通信,订阅消息
     this.pid= pubsub.subscribe('updateListData',(dataObj)=>{
       console.log('我是list组件，收到了数据:',dataObj)
         this.info = {...this.info,...dataObj}
      })

        //this.$bus.$on('updateListData',(dataObj)=>{
            // console.log('我是list组件，收到了数据:',users)
            // this.users = users
            // this.isFirst = isFirst
            // this.isLoading = isLoading
            // this.errmsg = errmsg
         //   this.info = {...this.info,...dataObj}

        //})
    },
    beforeDestroy(){
       pubsub.unsubscribe(pid)
    }
}
</script>

<style>
    .album {
    min-height: 50rem; /* Can be removed; just added for demo purposes */
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
  }

  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

</style>