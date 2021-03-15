export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const GET_ITEM = 'GET_ITEM';
export const SUBMIT = 'SUBMIT';

export const getItems = (item) => {
  return {
    type: GET_ITEM,
  };
}
export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload:item
  };
}
export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    payload: id,
  };
}
export const submit = () => {
  return {
    type: SUBMIT,
  };
}