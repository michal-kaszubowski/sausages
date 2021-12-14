export const logger = store => next => action => {
    console.group(action.type);
    console.info('Dispatching action:', action);
    const result = next(action);
    console.log('Next state:', store.getState());
    console.groupEnd();
    return result;
}

export const watcher = store => next => action => {
    if (action.type === 'INCREMENT') {
        alert('Incrementing counter');
        return next(action);
    } else if (action.type === 'DECREMENT' && store.getState() > 0) {
        return next(action);
    }
}
