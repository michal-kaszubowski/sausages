import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './tests/reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./store";
import {fetchManufacturers} from "./ducks/manufacturers/operations";
import {fetchSausages} from  "./ducks/sausages/operations";
import {fetchSpices} from "./ducks/spices/operations";

fetchManufacturers();
fetchSausages();
fetchSpices();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
