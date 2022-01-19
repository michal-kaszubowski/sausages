import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import SausageAdd from "./sausages/SausageAdd";
import SausageList from "./sausages/SausageList";
import SausageDetails from "./sausages/SausageDetails";
import SausageEdit from "./sausages/SausageEdit";
import ManufacturerAdd from "./manufacturers/ManufacturerAdd";
import ManufacturerList from "./manufacturers/ManufacturerList";
import ManufacturerDetails from "./manufacturers/ManufacturerDetails";
import ManufacturerEdit from "./manufacturers/ManufacturerEdit";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <nav>
                    <Link to="/">Kiełbaski</Link>
                    <Link to="/manufacturers">Producenci</Link>
                    <Link to="/spices">Zioła</Link>
                </nav>
                <Routes>
                    <Route exact path="/" element={<SausageList/>}/>
                    <Route path="/sausages/add" element={<SausageAdd/>}/>
                    <Route path="/sausages/details" element={<SausageDetails/>}/>
                    <Route path="/sausages/edit" element={<SausageEdit/>}/>
                    <Route exact path="/manufacturers" element={<ManufacturerList/>}/>
                    <Route path="/manufacturers/add" element={<ManufacturerAdd/>}/>
                    <Route path="/manufacturers/details" element={<ManufacturerDetails/>}/>
                    <Route path="/manufacturers/edit" element={<ManufacturerEdit/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
