
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */

export const ADD_ITEM = 'ADD_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const NEW_DATA = 'NEW_DATA';

export const addItem = data => {
    return{
        type:ADD_ITEM,
        payload : data
    }
}
export const updateItem = data => {
    
    return{
        type:UPDATE_ITEM,
        payload : data
    }
}
export const deleteItem = data => {
    return{
        type:DELETE_ITEM,
        payload : data
    }
}
export const handleAddItem = (data,item) => {
    data.push(item)
    return  dispatch => {
        dispatch(addItem(data));
        dispatch(handleNewData(data))
    }
}
export const handleUpdateItem = (data,item) => {
    data[data.findIndex(el => el.id === item.id)] = item; // for updating list item  
    return dispatch => {
       dispatch(updateItem(data))
       dispatch(handleNewData(data))
    }
}
export const handleDeleteItem = (data,id) => {
     let availableData = data.filter(item => item.id !== id); // filter for deleteing using id
     return dispatch => {
        dispatch(deleteItem(availableData))
        dispatch(handleNewData(availableData))
     }
}
/* handle newData for search filter */
export const handleNewData = data => {
    return{
        type:NEW_DATA,
        payload:data
    }
}