<template>
    <section class="jumbotron">
      <h3 class="jumbotron-heading" >Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
        <button @click="searchUser">Search</button>
      </div>
    </section>
</template>

<script>
    import axios from 'axios'
    export default {
        name:'Search',
        data(){
            return{
                keyWord:''
            }
        },
        methods:{
            searchUser(){
                // 请求前更新list数据
                this.$bus.$emit('updateListData',{isFirst:false,isLoading:true,errmsg:'',users:[]})
                axios.get(`http://api.github.com/search/users?q=${this.keyWord}`).then(
                    response=>{
                        console.log('成功',response.data)
                        // this.$bus.$emit('getUsers',response.data.items)
                        // this.$bus.$emit('updateListData',response.data.items,false,false,'')
                         this.$bus.$emit('updateListData',{isLoading:false,errmsg:'',users:response.data.items})
                    },
                    error=>{
                        // console.log('错误',error.message)
                        this.$bus.$emit('updateListData',{isLoading:false,errmsg:error.message,users:[]})
                    }
                )
        }
        }
    }
</script>

