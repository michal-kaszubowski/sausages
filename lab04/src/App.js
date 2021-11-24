import Add from "./Add";
import {useState} from "react";

function App() {
    const [itemType, setItemType] = useState("movie");

    return (
        <div className="app">
            <div className="add">
                <select name="itemTypeSelect" onChange={event => setItemType(event.target.value)}>
                    <option>Movie</option>
                    <option>Director</option>
                </select>
                <Add itemType={itemType}/>
            </div>
        </div>
    );
}

export default App;
