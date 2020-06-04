export const addItem = (item)=>{
    return {
        type:"ADD_ITEM",
        payload:{
            item:item
        }
    }
}

export const editItem = (oldValue, newValue)=>{
    return {
        type:"EDIT_ITEM",
        payload:{
            oldValue,newValue
        }
    }
}

export const deleteItem = (item)=>{
    return {
        type:"DELETE_ITEM",
        payload:{
            item:item
        }
    }
}

export const changeStatus = (item,status)=>{
    return {
        type:"CHANGE_STATUS",
        payload:{
            item,status
        }
    }
}