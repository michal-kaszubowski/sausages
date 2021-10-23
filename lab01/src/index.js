import ReactDOM from "react-dom";
import React from "react";
import reportWebVitals from "./reportWebVitals";
import List from "./List";
import Add from "./Add";

ReactDOM.render(
    <React.StrictMode>
        <List />
        <Add />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
