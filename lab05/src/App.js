import {useDispatch} from "react-redux";
import Counter from "./Counter";
import {increment, start} from "./ducks/actions";

const App = () => {
    const dispatch = useDispatch();

    return (
        <div className="app">
            <Counter/>
            <button onClick={() => dispatch(increment)}>+1</button>
            <button onClick={() => dispatch(start)}>Start</button>
            <button>Stop</button>
        </div>
    );
}

export default App;
