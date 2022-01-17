import axios from "axios";
import {
    fetchManufacturersSuccess, updateManufacturerSuccess, addManufacturerSuccess, deleteManufacturerSuccess
} from "./actions";

const port = process.env.PORT || 5000

export const fetchManufacturers = () => async dispatch => {
    await axios
        .get(`http://localhost:${port}/manufacturers`)
        .then(response => dispatch(fetchManufacturersSuccess(response.data)))
        .catch(err => console.error(err));
}

export const updateManufacturer = payload => async dispatch => {
    await axios
        .put(`http://localhost:${port}/manufacturers/:${payload.id}`, payload)
        .then(() => dispatch(updateManufacturerSuccess(payload)))
        .catch(err => console.error(err));
}

export const addManufacturer = payload => async dispatch => {
    await axios
        .post(`http://localhost:${port}/manufacturers`, payload)
        .then(() => dispatch(addManufacturerSuccess(payload)))
        .catch(err => console.error(err));
}

export const deleteManufacturer = payload => async dispatch => {
    await axios
        .delete(`http://localhost:${port}/manufacturers/:${payload.id}`, payload)
        .then(() => dispatch(deleteManufacturerSuccess(payload)))
        .catch(err => console.error(err));
}
