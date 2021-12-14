import {useDispatch} from "react-redux";
import Counter from "./Counter";
import {increment, decrement} from "./ducks/actions";

const App = () => {
    const dispatch = useDispatch();

    return (
        <div className="app">
            <Counter/>
            <button onClick={() => dispatch(increment)}>+1</button>
            <button onClick={() => dispatch(decrement)}>-1</button>
        </div>
    );
}

export default App;
