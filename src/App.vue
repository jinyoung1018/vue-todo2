<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata = "todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList> 
    <TodoFooter v-on:clearItem="clearAllItems"></TodoFooter>
    
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'


export default {
  data() {
    return{
      todoItems: [],
    }
  },
  methods:{
    addOneItem(todoItem){
      const obj = {completed:false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));//JSON.stringify(obj) 자바스크립트 객체를 스트링으로 변환
      this.todoItems.push(obj)
    },
    removeOneItem(todoItem,index){
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);//자바스크립트 배열 api, 특정 index에서 하나 지우기
    },
    toggleOneItem(todoItem, index){
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item,JSON.stringify(todoItem));
    },
    clearAllItems(){
      localStorage.clear();
      this.todoItems = [];//다시 빈 배열로 만들기 
    }
  },

  created(){
        if (localStorage.length > 0){
            for(let i = 0; i < localStorage.length ; i ++){
                if(localStorage.key(i) != 'loglevel:webpack-dev-server'){
                    this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));//JSON.parse()스트링을 다시 오브젝트로
                }

            }
        }
    },
  //컴포넌트 등록
  components: {
    //컴포넌트 태그명: 컴포넌트 내용
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter

  }

  
}
</script>

<style>
body{
  text-align: center;
  background-color: #F6F6F6;
}

input{
  border-style:groove;
  width: 200px;
}

button{
  border-style: groove;
}

.shadow{
  box-shadow: 5px 10px 10px rgba(0,0,0,0.3) ;
}

</style>
