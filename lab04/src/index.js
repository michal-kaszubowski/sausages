import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import {movieReducer} from "./ducks/movies/reducers";
import {directorReducer} from "./ducks/directors/reducers";

const oneReducer = combineReducers({
    movies: movieReducer,
    directors: directorReducer
});

const store = createStore(oneReducer);
store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
