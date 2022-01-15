export const logger = store => next => action => {
    console.group(action.type);
    console.info('Dispatching action:', action);
    const result = next(action);
    console.log('Next initState:', store.getState());
    console.groupEnd();
    return result;
}
