import {decrement} from "./actions";

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
    }
    return next(action);
}

export const counter = store => next => action => {
    const job = () => {
        next(decrement);
        return trigger();
    }
    const trigger = () => {
        store.getState() > 0 ? setTimeout(job, 1000) : store.getState();
    }
    if (action.type === 'START') {
        console.log('Counting...');
        return trigger();
    } else {
        console.log('Not counting :/');
        return next(action);
    }
}
