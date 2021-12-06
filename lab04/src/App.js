import {useState} from "react";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Add from "./Add";
import ListMovies from "./Lists/ListMovies";
import ListDirectors from "./Lists/ListDirectors";
import "./ui/App.css"

const App = () => {
    const [itemType, setItemType] = useState("movie");

    return (
        <div className="App">
            <Navbar/>
            <Dashboard/>
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
