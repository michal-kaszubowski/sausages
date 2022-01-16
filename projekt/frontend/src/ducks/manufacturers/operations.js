import axios from "axios";
import {
    fetchManufacturersSuccess,
    updateManufacturerSuccess,
    addManufacturerSuccess,
    deleteManufacturerSuccess
} from "./actions";

const port = process.env.PORT || 5000

export const fetchManufacturers = () => {
    return async dispatch => {
        try {
            await axios
                .get(`http://localhost:${port}/manufacturers`)
                .then(response => {
                    dispatch(fetchManufacturersSuccess(response.data));
                });
        } catch (err) {
            console.log(err);
        }
    }
}

export const updateManufacturer = payload => {
    return async dispatch => {
        try {
            await axios
                .put(`http://localhost:${port}/manufacturers/:${payload.id}`, payload);
            dispatch(updateManufacturerSuccess(payload));
        } catch (err) {
            console.log(err);
        }
    }
}

export const addManufacturer = payload => {
    return async dispatch => {
        try {
            await axios
                .post(`http://localhost:${port}/manufacturers`, payload);
            dispatch(addManufacturerSuccess(payload));
        } catch (err) {
            console.log(err);
        }
    }
}

export const deleteManufacturer = payload => {
    return async dispatch => {
        try {
            await axios
                .delete(`http://localhost:${port}/manufacturers/:${payload.id}`, payload);
            dispatch(deleteManufacturerSuccess(payload));
        } catch (err) {
            console.log(err);
        }
    }
}
