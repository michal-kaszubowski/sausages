import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import AddSausage from "./sausages/SausageAdd";
import SausageList from "./sausages/SausageList";
import SausageDetails from "./sausages/SausageDetails";
import SausageEdit from "./sausages/SausageEdit";

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
                    <Route path="/sausages/add" element={<AddSausage/>}/>
                    <Route path="/sausages/details" element={<SausageDetails/>}/>
                    <Route path="/sausages/edit" element={<SausageEdit/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
