import axios from "axios";
import {
    fetchManufacturersSuccess,
    deleteManufacturerSuccess
} from "./actions";

const port = process.env.PORT || 5000

export const fetchManufacturers = () => async dispatch => {
    await axios
        .get(`http://localhost:${port}/manufacturers`)
        .then(response => dispatch(fetchManufacturersSuccess(response.data)))
        .catch(err => console.error(err));
}

export const addManufacturer = payload => async dispatch => {
    await axios
        .post(`http://localhost:${port}/manufacturers`, payload)
        .then(() => dispatch(fetchManufacturers()))
        .catch(err => console.error(err));
}

export const updateManufacturer = payload => async dispatch => {
    await axios
        .put(`http://localhost:${port}/manufacturers/${payload._id}`, payload)
        .then(() => dispatch(fetchManufacturers()))
        .catch(err => console.error(err));
}

export const deleteManufacturer = payload => async dispatch => {
    await axios
        .delete(`http://localhost:${port}/manufacturers/${payload._id}`, payload)
        .then(() => dispatch(deleteManufacturerSuccess(payload)))
        .catch(err => console.error(err));
}
