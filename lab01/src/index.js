import ReactDOM from "react-dom";
import React from "react";
import reportWebVitals from "./reportWebVitals";
import List from "./List";
import Add from "./Add";
import {ConfirmProvider} from "material-ui-confirm";

ReactDOM.render(
    <React.StrictMode>
        <ConfirmProvider>
            <List />
        </ConfirmProvider>
        <Add />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
