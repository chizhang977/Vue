<template>
  <div>
     <h2>我是Home的内容</h2>
   <div>
			<ul class="nav nav-tabs">
				<li>
					<router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
				</li>
				<li>
					<router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
				</li>
			</ul>
      <!-- 使用keepalive可以让不展示的路由不销毁，保持挂载 -->
    <keep-alive include="News">
			<router-view></router-view>

    </keep-alive> 
		</div>
  </div>
 
</template>

<script>
export default {
    name:'Home',
    beforeDestroy(){
      console.log('Home组件即将被销毁了')
    },
    mounted(){
      console.log('Home组件挂载完毕',this)
      window.homeRoute = this.$route
      window.homeRouter = this.$router
    }
}
</script>

