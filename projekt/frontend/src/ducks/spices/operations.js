import axios from "axios";
import {
    addSpiceSuccess,
    deleteSpiceSuccess,
    fetchSpicesSuccess,
    updateSpiceSuccess
} from "./actions";

const port = process.env.PORT || 5000

export const fetchSpices = () => {
    return async dispatch => {
        try {
            await axios
                .get(`http://localhost:${port}/spices`)
                .then(response => {
                    dispatch(fetchSpicesSuccess(response.data));
                });
        } catch (err) {
            console.log(err);
        }
    }
}

export const addSpice = payload => {
    return async dispatch => {
        try {
            await axios
                .post(`http://localhost:${port}/spices`, payload);
            dispatch(addSpiceSuccess(payload));
        } catch (err) {
            console.log(err);
        }
    }
}

export const updateSpice = payload => {
    return async dispatch => {
        try {
            await axios
                .put(`http://localhost:${port}/spices/:${payload.id}`, payload);
            dispatch(updateSpiceSuccess(payload));
        } catch (err) {
            console.log(err);
        }
    }
}

export const deleteSpice = payload => {
    return async dispatch => {
        try {
            await axios
                .post(`http://localhost:${port}/spices/:${payload.id}`);
            dispatch(deleteSpiceSuccess(payload));
        } catch (err) {
            console.log(err);
        }
    }
}
