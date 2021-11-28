import {useState} from "react";
import Add from "./Add";
import Display from "./Display";

const App = () => {
    console.log("Entering App component...")
    const [itemType, setItemType] = useState("movie");

    return (
        <div className="App">
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
            <Display itemType="movie"/>
        </div>
    );
}

export default App;
