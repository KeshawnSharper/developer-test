import {
  GET_ITEM,
  ADD_ITEM,
  DELETE_ITEM,
  SUBMIT
} from './actions';

const INITIAL_STATE = {
  items: [],
};

// Complete the three cases below
export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ITEM:
      return {
        items:state.items
      };
    case ADD_ITEM:
      return {
        items:[...state.items,action.payload]
      }
    case DELETE_ITEM:
      return {
        items:state.items.filter(item => (
          item !== action.payload
        ))
      };
      case SUBMIT:
        return {
          items:[]
        };
    default:
      return {
       items:[] 
      };
  }
};

