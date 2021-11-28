import {useState} from "react";
import Add from "./Add";
import {ListDirectors, ListMovies} from "./List";

const App = () => {
    const [itemType, setItemType] = useState("movie");

    return (
        <div className="App">
            <div className="add">
                <select name="itemTypeSelect" onChange={event => {
                    setItemType(event.target.value);
                }}>
                    <option>movie</option>
                    <option>director</option>
                </select>
                <Add itemType={itemType}/>
                <ListMovies/>
                <ListDirectors/>
            </div>
        </div>
    );
}

export default App;
