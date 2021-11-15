import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const App = () => {
    return (
        <div className="App">
            <TodoList/>
            <TodoForm type='ADD_TODO'/>
        </div>
    );
}

export default App