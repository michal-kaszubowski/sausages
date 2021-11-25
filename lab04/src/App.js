import Add from "./Add";
import {useState} from "react";

function App() {
    const [itemType, setItemType] = useState("movie");

    return (
        <div className="app">
            <div className="add">
                <select name="itemTypeSelect" onChange={event => {
                    console.log("Selected value: ", event.target.value);
                    setItemType(event.target.value);
                }}>
                    <option>movie</option>
                    <option>director</option>
                </select>
                <Add itemType={itemType}/>
            </div>
        </div>
    );
}

export default App;
