export const fetchSausagesSuccess = payload => ({
    type: 'FETCH_SAUSAGES',
    payload
});

export const addSausageSuccess = payload => ({
    type: 'ADD_SAUSAGE',
    payload
});

export const updateSausageSuccess = payload => ({
    type: 'UPDATE_SAUSAGE',
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
