import {combineReducers ,createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {sausageReducer} from "./ducks/sausages/reducer";
import {manufacturerReducer} from "./ducks/manufacturers/reducer";
import {spiceReducer} from "./ducks/spices/reducer";
import {logger} from "./middlewares/logger";
import {fetchManufacturers} from "./ducks/manufacturers/operations";
import {fetchSausages} from  "./ducks/sausages/operations";
import {fetchSpices} from "./ducks/spices/operations";

export const cacheObject = payload => ({
    type: 'CACHE_OBJECT',
    payload
});

const cacheReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CACHE_OBJECT':
            return action.payload;
        default:
            return state;
    }
}

const oneReducer = combineReducers({
    cache: cacheReducer,
    sausages: sausageReducer,
    manufacturers: manufacturerReducer,
    spices: spiceReducer
});

export const fetchStore = () => {
    store.dispatch(fetchSausages());
    store.dispatch(fetchManufacturers());
    store.dispatch(fetchSpices());
}

export const store = createStore(oneReducer, applyMiddleware(thunk, logger));
