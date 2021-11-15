import {connect} from "react-redux";
import {useDispatch} from "react-redux";
import {finishTodo} from "./TodoActions";

const TodoList = ({todos}) => {
    /** Component <- {todos} / {todos: todos}
     * This function, which gets todos from
     * react-redux connect method is supposed
     * to return unordered list of tasks where
     * each has individual key.
     */

    const dispatch = useDispatch()

    return (
        <div className="TodoList">
            <h2>Todos:</h2>
            <ul className="todos">
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span className="date">{todo.date}</span>
                        <span className="name">{todo.name}</span>
                        {todo.done ? <span>✔️</span> : <button onClick={() => dispatch(finishTodo(todo))}>Done!</button>}
                    </li>
                ))}
            </ul>
        </div>
    );
}

const mapStateToProps = state => {
    /** Function <- state - store.getState()
     * Function mapState... is used to get state from
     * the store and then return the state to be used
     * as props in other function.
     */

    return {
        todos: state.todos
    };
}

export default connect(mapStateToProps)(TodoList);