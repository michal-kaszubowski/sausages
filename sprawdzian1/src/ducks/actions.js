export const addPack = payload => ({
    type: 'ADD_PACK',
    payload
});

export const deletePack = addressee => ({
    type: 'DELETE_PACK',
    addressee
});

export const updatePack = payload => ({
    type: 'UPDATE_PACK',
    payload
});

export const editPack = payload => ({
    type: 'EDIT_PACK',
    payload
});
