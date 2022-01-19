import axios from "axios";
import {
    deleteSpiceSuccess,
    fetchSpicesSuccess
} from "./actions";

const port = process.env.PORT || 5000

export const fetchSpices = () => async dispatch => {
    await axios
        .get(`http://localhost:${port}/spices`)
        .then(response => dispatch(fetchSpicesSuccess(response.data)))
        .catch(err => console.error(err));
}

export const addSpice = payload => async dispatch => {
    await axios
        .post(`http://localhost:${port}/spices`, payload)
        .then(() => dispatch(fetchSpices()))
        .catch(err => console.error(err));
}

export const updateSpice = payload => async dispatch => {
    await axios
        .put(`http://localhost:${port}/spices/:${payload._id}`, payload)
        .then(dispatch(fetchSpices()))
        .catch(err => console.error(err));
}

export const deleteSpice = payload => async dispatch => {
    await axios
        .post(`http://localhost:${port}/spices/:${payload._id}`)
        .then(() => dispatch(deleteSpiceSuccess(payload)))
        .catch(err => console.error(err));
}
