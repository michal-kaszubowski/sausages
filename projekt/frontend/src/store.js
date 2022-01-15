import {combineReducers ,createStore, applyMiddleware} from "redux";
import {sausageReducer} from "./ducks/sausages/reducer";
import {manufacturerReducer} from "./ducks/manufacturers/reducer";
import {spiceReducer} from "./ducks/spices/reducer";
import {logger} from "./middlewares/logger";

const oneReducer = combineReducers({
    sausages: sausageReducer,
    manufacturers: manufacturerReducer,
    spices: spiceReducer
});

export const store = createStore(oneReducer, applyMiddleware(logger));
