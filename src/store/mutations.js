const addOneItem = (state, todoItem) => {
    const obj = {completed:false, item: todoItem};
    localStorage.setItem(todoItem, JSON.stringify(obj));//JSON.stringify(obj) 자바스크립트 객체를 스트링으로 변환
    state.todoItems.push(obj);
}

const removeOneItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1);//자바스크립트 배열 api, 특정 index에서 하나 지우기
}

const toggleOneItem = (state,payload) => {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item,JSON.stringify(payload.todoItem));
}

const clearAllItems = (state) => {
    localStorage.clear();
    state.todoItems = [];//다시 빈 배열로 만들기 
}

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems}
