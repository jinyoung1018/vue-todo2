import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex);

const storage = {
    fetch(){
        const arr = [];
            if (localStorage.length > 0){
                for(let i = 0; i < localStorage.length ; i ++){
                    if(localStorage.key(i) != 'loglevel:webpack-dev-server'){
                        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));//JSON.parse()스트링을 다시 오브젝트로
                    }
                }
            }  
        return arr;
    },
}

export const store = new Vuex.Store({
    state:{
      todoItems: storage.fetch()
    },
     getters: getters,
     //{
    //     storedTodoItems(state) {
    //         return state.todoItems;
    //     }

    // },
    mutations: mutations //{
    //     addOneItem(state, todoItem){
    //         const obj = {completed:false, item: todoItem};
    //         localStorage.setItem(todoItem, JSON.stringify(obj));//JSON.stringify(obj) 자바스크립트 객체를 스트링으로 변환
    //         state.todoItems.push(obj);
    //     },

    //     removeOneItem(state, payload){
    //         localStorage.removeItem(payload.todoItem.item);
    //         state.todoItems.splice(payload.index, 1);//자바스크립트 배열 api, 특정 index에서 하나 지우기
    //     },

    //     toggleOneItem(state,payload){
    //         state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    //         localStorage.removeItem(payload.todoItem.item);
    //         localStorage.setItem(payload.todoItem.item,JSON.stringify(payload.todoItem));
    //     },

    //     clearAllItems(state){
    //         localStorage.clear();
    //         state.todoItems = [];//다시 빈 배열로 만들기 
    //     }

    // }

});