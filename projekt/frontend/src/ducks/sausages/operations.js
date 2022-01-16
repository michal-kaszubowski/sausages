import axios from "axios";
import {
    addSausageSuccess,
    deleteSausageSuccess,
    fetchSausagesSuccess,
    updateSausageSuccess,
    addSpiceToSausageSuccess
} from "./actions";

const port = process.env.PORT || 5000

export const fetchSausages = () => {
    return async dispatch => {
        try {
            await axios
                .get(`http://localhost:${port}/sausages`)
                .then(response => {
                    dispatch(fetchSausagesSuccess(response.data));
                });
        } catch (err) {
            console.error(err);
        }
    }
}

export const addSausage = payload => {
    return async dispatch => {
        try {
            await axios
                .post(`http://localhost:${port}/sausages`, payload);
            dispatch(addSausageSuccess(payload));
        } catch (err) {
            console.error(err);
        }
    }
}

export const updateSausage = payload => {
    return async dispatch => {
        try {
            await axios
                .put(`http://localhost:${port}/sausages/:${payload.id}`, payload);
            dispatch(updateSausageSuccess(payload));
        } catch (err) {
            console.error(err);
        }
    }
}

export const deleteSausage = payload => {
    return async dispatch => {
        try {
            await axios
                .delete(`http://localhost:${port}/sausages/:${payload.id}`);
            dispatch(deleteSausageSuccess(payload));
        } catch (err) {
            console.error(err);
        }
    }
}

export const addSpiceToSausage = payload => {
    return async dispatch => {
        try {
            await axios
                .patch(`http://localhost:${port}/sausages/:${payload.id}`, payload);
            dispatch(addSpiceToSausageSuccess(payload));
        } catch (err) {
            console.error(err);
        }
    }
}
