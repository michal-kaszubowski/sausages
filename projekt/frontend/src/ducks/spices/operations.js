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
                .get(`https://localhost:${port}/spices`)
                .then(response => {
                    dispatch(fetchSpicesSuccess(response.data));
                });
        } catch (err) {
            console.log(err);
        }
    }
}

export const addSpices = payload => {
    return async dispatch => {
        try {
            await axios
                .post(`https://localhost:${port}/spices`, payload);
            dispatch(addSpiceSuccess(payload));
        } catch (err) {
            console.log(err);
        }
    }
}

export const updateSpices = payload => {
    return async dispatch => {
        try {
            await axios
                .put(`https://localhost:${port}/spices/:${payload.id}`, payload);
            dispatch(updateSpiceSuccess(payload));
        } catch (err) {
            console.log(err);
        }
    }
}

export const deleteSpices = payload => {
    return async dispatch => {
        try {
            await axios
                .post(`https://localhost:${port}/spices/:${payload.id}`, payload);
            dispatch(deleteSpiceSuccess(payload));
        } catch (err) {
            console.log(err);
        }
    }
}
