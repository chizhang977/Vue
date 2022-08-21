<template>
   <li>
        <label>
            <!-- <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)"/> -->
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
            <span v-show="!todo.isEdit">{{todo.title}}</span>
            <input 
              type="text" 
              :value="todo.title"
              v-show="todo.isEdit"
              ref="inputTitle"
              @blur="handleBlur(todo,$event)"
              >
        </label>
        
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
        <button class="btn btn-danger" @click="handleEidt(todo)" v-show="!todo.isEdit">编辑</button>
    </li>
</template>

<script>
  import pubsub from 'pubsub-js'
    export default {
        name:'MyItem',
        // 接受todoObject
        props:['todo'],
        methods:{
            handleCheck(id){
                // this.checkTodo(id)
                this.$bus.$emit('checkTodo',id)
            },
            handleDelete(id){
                if(confirm("确认要删除吗?")){
                    // this.deleteTodo(id)
                    // this.$bus.$emit('deleteTodo',id)
                    pubsub.publish('deleteTodo',id)
                }
            },
            handleEidt(todo){
              // 当我们点击编辑按钮,变为文本框
              // 先判断里面有没有isEdit
              if(todo.hasOwnProperty('isEdit')){
                todo.isEdit = true
              }else{
                this.$set(todo,'isEdit',true)
              }

              this.$nextTick(function(){
                this.$refs.inputTiltle.focus()//在下一次 DOM 更新结束后执行其指定的回调。
              })//当改变数据时，我们要基于修改后的dom进行某些操作时，可以使用$nextTick回调
            },
            handleBlur(todo,e){
              todo.isEdit = false
              if(!e.target.value.trim()) return alert('输入不能为空')
              this.$bus.$emit('updateTodo',todo.id,e.target.value)
            }
        }
    }
</script>

<style>
    /*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover{
    background-color: #ddd;
}
li:hover button{
    display: block;
}
</style>