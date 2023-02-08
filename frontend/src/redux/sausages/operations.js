import axios from "axios";
import {
    deleteSausageSuccess,
    fetchSausagesSuccess,
    addSpiceToSausageSuccess
} from "./actions";

const port = process.env.PORT || 5000

export const fetchSausages = () => async dispatch => {
    await axios
        .get(`http://localhost:${port}/sausages`)
        .then(response => dispatch(fetchSausagesSuccess(response.data)))
        .catch(err => console.error(err));
}

export const addSausage = payload => async dispatch => {
    await axios
        .post(`http://localhost:${port}/sausages`, payload)
        .then(() => dispatch(fetchSausages()))
        .catch(err => console.error(err));
}

export const updateSausage = payload => async dispatch => {
    await axios
        .put(`http://localhost:${port}/sausages/${payload._id}`, payload)
        .then(() => dispatch(fetchSausages()))
        .catch(err => console.error(err));
}

export const deleteSausage = payload => async dispatch => {
    await axios
        .delete(`http://localhost:${port}/sausages/${payload._id}`)
        .then(() => dispatch(deleteSausageSuccess(payload)))
        .catch(err => console.error(err));
}

export const addSpiceToSausage = payload => async dispatch => {
    await axios
        .patch(`http://localhost:${port}/sausages/${payload._id}`, payload)
        .then(() => dispatch(addSpiceToSausageSuccess(payload)))
        .catch(err => console.error(err));
}
