import List from "./List";
import {useState} from "react";
import {fetchStore, store} from "../store";

const App = () => {
    return (
        <div className="App">
            <List/>
        </div>
    );
}

export default App;
