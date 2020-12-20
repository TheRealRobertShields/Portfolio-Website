import { combineReducers } from 'redux';
import parts from './REDUCERS.parts';
import base from './REDUCERS.base';
import users from './REDUCERS.users';

export default combineReducers({
    base,
    parts,
    users,
});