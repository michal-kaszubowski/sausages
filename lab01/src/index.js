import ReactDOM from "react-dom";
import React from "react";
import reportWebVitals from "./reportWebVitals";
import List from "./List";
import Set from "./Set";
import {ConfirmProvider} from "material-ui-confirm";

ReactDOM.render(
    <React.StrictMode>
        <ConfirmProvider>
            <List />
        </ConfirmProvider>
        <Set
            type="POST"
            title="Product name"
            price={0}
            description="Description of the product"
            image=""
            category="Category name"
        />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
