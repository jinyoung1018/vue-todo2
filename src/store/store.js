import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
    fetch(){
        const arr = [];
            if (localStorage.length > 0){
                for(let i = 0; i < localStorage.length ; i ++){
                    if(localStorage.key(i) != 'loglevel:webpack-dev-server'){
                        this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));//JSON.parse()스트링을 다시 오브젝트로
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
    mutations: {
        addOneItem(state, todoIem){
            const obj = {completed:false, item: todoItem};
            localStorage.setItem(todoItem, JSON.stringify(obj));//JSON.stringify(obj) 자바스크립트 객체를 스트링으로 변환
            state.todoItems.push(obj);

        }

    }

});