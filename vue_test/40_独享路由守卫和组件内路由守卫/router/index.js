// 该文件用户创建整个应用的路由器
import VueRouter from "vue-router";
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'


// 创建并暴漏一个路由器
const router =  new VueRouter({
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About,
            meta:{title:'关于'}
        },
        {
            name:'home',
            path:'/home',
            component:Home,
            meta:{title:'主页'},
            children:[
                {
                    path:'news',
                    component:News,
                    name:'xinwen',
                    meta:{isAuth:true,title:'新闻'}
                },
                {
                    path:'message',
                    component:Message,
                    name:'xiaoxi',
                    meta:{isAuth:true,title:'消息'},
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail',//使用params来接受参数
                            component:Detail,
                            meta:{isAuth:true,title:'详情'},
                            beforeEnter: (to, from, next) => {
                                console.log('独享路由守卫',to,from)
                                if (to.meta.isAuth) {//判断是否需要鉴权
                                    if (localStorage.getItem('school')==='atguigu') {
                                        next()
                                    }else{
                                        alert('学校名不对,无权限！')
                                    }
                                    
                                }else{
                                    next()
                                }
                            },
                            // props第一种写法，值为对象，该对象中所有的key-value都会以props形式给Detail组件
                            // props:{a:1,b:2}
                            // props第二种写法:值为布尔值，如布尔值为真，就会把该组件收到的所有params参数，以props形式传给Detail组件
                            // props:true
                            //props的第三种写法:值为函数
                            props(route){
                                return {
                                    id:route.query.id,
                                    title:route.query.title
                                }
                            }                            
                        }
                    ]
                }
            ]
        }
    ]
})

// 全局前置路由守卫-初始化时候被调用,每次路由切换之前被调用
// router.beforeEach((to, from, next) => {
//     console.log('前置路由守卫',to,from)
//     if (to.meta.isAuth) {//判断是否需要鉴权
//         if (localStorage.getItem('school')==='atguigu') {
//             next()
//         }else{
//             alert('学校名不对,无权限！')
//         }
        
//     }else{
//         next()
//     }
   
// })

// 全局后置路由守卫-初始化的时候被调用，每次路由切换之后被调用
router.afterEach((to, from) => {
    // to and from are both route objects.
    console.log('后置路由守卫',to,from)
    document.title = to.meta.title || '硅谷系统'
})

export default router