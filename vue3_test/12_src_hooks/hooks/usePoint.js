import { reactive,onMounted ,onBeforeUnmount} from "vue"
export default function(){
    // 实现鼠标打点相关的数据
    let point = reactive({
        x:0,
        y:0
    })

    // 鼠标打点方法
    function savePoint(event){
        point.x = event.pageX
        point.y = event.pageY

        console.log(event.pageX,event.pageY)

    }

    // 生命周期钩子
    onMounted(() => {
        window.addEventListener('click',savePoint)
    }),
    onBeforeUnmount(() => {
        window.removeEventListener('click',savePoint)
    })
    return point
}