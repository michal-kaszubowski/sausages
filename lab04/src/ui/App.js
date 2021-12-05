import {useState} from "react";
import Add from "./Add";
import ListMovies from "./ListMovies";
import ListDirectors from "./ListDirectors";

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
            </div>
            <ListMovies/>
            <ListDirectors/>
        </div>
    );
}

export default App;