import { FETCH_ALL_PARTS, CREATE_PART, UPDATE_PART, DELETE_PART } from '../CONSTANTS/CONSTANTS.part';
import * as api from '../API/API.index';

// Action Creators
export const getParts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchParts();
        dispatch({ type: FETCH_ALL_PARTS, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createPart = (part) => async (dispatch) => {
    try {
        const { data } = await api.createPart(part);
        console.log(`PART ${part.name} ${part.number} ${part.category}`)
        dispatch({ type: CREATE_PART, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updatePart = (id, part) => async (dispatch) => {
    try {
        const { data } = await api.updatePart(id, part);
        dispatch({ type: UPDATE_PART, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deletePart = (id) => async (dispatch) => {
    try {
        await api.deletePart(id);
        dispatch({ type: DELETE_PART, payload: id });
    } catch (error) {
        console.log(error);
    }
}