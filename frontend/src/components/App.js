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

import SpiceAdd from "./spices/SpiceAdd";
import SpiceList from "./spices/SpiceList";
import SpiceEdit from "./spices/SpiceEdit";

import "../ui/App.css";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <div className="header">
                    <nav>
                        <Link to="/">Kiełbaski</Link>
                        <Link to="/manufacturers">Producenci</Link>
                        <Link to="/spices">Zioła</Link>
                    </nav>
                </div>
                <Routes>
                    <Route exact path="/" element={<SausageList/>}/>
                    <Route path="/sausages/add" element={<SausageAdd/>}/>
                    <Route path="/sausages/details" element={<SausageDetails/>}/>
                    <Route path="/sausages/edit" element={<SausageEdit/>}/>
                    <Route exact path="/manufacturers" element={<ManufacturerList/>}/>
                    <Route path="/manufacturers/add" element={<ManufacturerAdd/>}/>
                    <Route path="/manufacturers/details" element={<ManufacturerDetails/>}/>
                    <Route path="/manufacturers/edit" element={<ManufacturerEdit/>}/>
                    <Route exact path="/spices" element={<SpiceList/>}/>
                    <Route path="/spices/add" element={<SpiceAdd/>}/>
                    <Route path="/spices/edit" element={<SpiceEdit/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
