import { combineReducers } from 'redux';

const itemReducer = (todoList = [], action) => {
    if (action.type === "ADD_ITEM") {
        return [...todoList, {text:action.payload.item,status:"pending"}];
    }

    else if (action.type === "EDIT_ITEM") {
        let newTodo = [...todoList]
        newTodo.forEach((obj, index) => {
            if (obj.text === action.payload.oldValue) {
                newTodo[index].text = action.payload.newValue
                newTodo[index].status = "pending"
            }
        })
        return newTodo
    }

    else if (action.type === "DELETE_ITEM") {
        return todoList.filter((obj) => {
            return obj.text !== action.payload.item
        })
    }

    else if (action.type === "CHANGE_STATUS") {
        let newTodo = [...todoList]
        newTodo.forEach((obj, index) => {
            if (obj.text === action.payload.item) {
                newTodo[index].status = action.payload.status
            }
        })
        return newTodo
    }

    return todoList;
}

export default combineReducers(
    { item: itemReducer }
);