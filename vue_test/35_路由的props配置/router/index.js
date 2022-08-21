// 该文件用户创建整个应用的路由器
import VueRouter from "vue-router";
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建并暴漏一个路由器
export default new VueRouter({
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About
        },
        {
            name:'home',
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',
                    component:News,
                },
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail/:id/:title',//使用params来接受参数
                            component:Detail,
                            // props第一种写法，值为对象，该对象中所有的key-value都会以props形式给Detail组件
                            // props:{a:1,b:2}
                            // props第二种写法:值为布尔值，如布尔值为真，就会把该组件收到的所有params参数，以props形式传给Detail组件
                            // props:true
                            //props的第三种写法:值为函数
                            props(route){
                                return {
                                    id:route.params.id,
                                    title:route.params.title
                                }
                            }                            
                        }
                    ]
                }
            ]
        }
    ]
})