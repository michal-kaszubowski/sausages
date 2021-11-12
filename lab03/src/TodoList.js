import {connect} from "react-redux";

const TodoList = ({todos}) => {
    /** Component <- {todos} / {todos: todos}
     * This function, which gets todos from
     * react-redux connect method is supposed
     * to return unordered list of tasks where
     * each has individual key.
     */

    return (
        <div className="TodoList">
            <ul className="todos">
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span className="date">{todo.date}</span>
                        <span className="name">{todo.name}</span>
                        {todo.done ? <span>✔️</span> : <span>❌️</span>}
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