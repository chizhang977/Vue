// 引入的不再是Vue构造函数了，引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象-app（类似vue2中vm，但app比vm轻）
const app = createApp(App)
console.log('@@@',app)

// 挂载
app.mount('#app')
// 卸载
// setTimeout(() => {
//     app.unmount('#app')
// }, 1000);

// createApp(App).mount('#app')




// const vm = new Vue({
//    render:h=>h(App)
// }).$mount('#app')