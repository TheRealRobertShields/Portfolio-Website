import { FETCH_ALL_PARTS, CREATE_PART, UPDATE_PART, DELETE_PART } from '../CONSTANTS/CONSTANTS.part';

// eslint-disable-next-line
export default (parts = [], action) => {
    switch (action.type) {
        case FETCH_ALL_PARTS:
            console.log(action.type)
            return action.payload;
        case CREATE_PART:
            console.log(action.type)
            return [ ...parts, action.payload];
        case UPDATE_PART:
            console.log(action.type)
            return parts.map((part) => part._id === action.payload._id ? action.payload : part);
        case DELETE_PART:
            console.log(action.type)
            return parts.filter((part) => part._id !== action.payload);
        default:
            return parts;
    }
} 