import {reducer} from "./reducers";
const Redux = require('redux');

export const store = Redux.createStore(reducer);
