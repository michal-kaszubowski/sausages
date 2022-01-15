import axios from "axios";
import {
    addSausageSuccess,
    deleteSausageSuccess,
    fetchSausagesSuccess,
    updateSausageSuccess
} from "./actions";

const port = process.env.PORT || 5000

export const fetchSausages = () => {
    return async dispatch => {
        try {
            await axios
                .get(`https://localhost:${port}/sausages`)
                .then(response => {
                    dispatch(fetchSausagesSuccess(response.data));
                });
        } catch (err) {
            console.log(err);
        }
    }
}

export const addSausage = payload => {
    return async dispatch => {
        try {
            await axios
                .post(`https://localhost:${port}/sausages`, payload);
            dispatch(addSausageSuccess(payload));
        } catch (err) {
            console.log(err);
        }
    }
}

export const updateSausage = payload => {
    return async dispatch => {
        try {
            await axios
                .put(`https://localhost:${port}/sausages/:${payload.id}`, payload);
            dispatch(updateSausageSuccess(payload));
        } catch (err) {
            console.log(err);
        }
    }
}

export const deleteSausage = payload => {
    return async dispatch => {
        try {
            await axios
                .delete(`https://localhost:${port}/sausages/:${payload.id}`);
            dispatch(deleteSausageSuccess(payload));
        } catch (err) {
            console.log(err);
        }
    }
}
