export const fetchSausagesSuccess = payload => ({
    type: 'FETCH_SAUSAGES',
    payload
});

export const deleteSausageSuccess = payload => ({
    type: 'DELETE_SAUSAGE',
    payload
});

export const addSpiceToSausageSuccess = payload => ({
    type: 'ADD_SPICE_TO_SAUSAGE',
    payload
});
