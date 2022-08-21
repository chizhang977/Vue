export const hunhe = {
    methods:{
        showName(){
            alert(this.name)
        }
    },
    mounted() {
        console.log('模板解析完成，页面渲染完毕，mounted的钩子函数执行')
    },
}
export const  hunhe2 = {
    data(){
        return{
            x:100,
            y:200
        }
    }
}