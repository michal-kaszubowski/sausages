import {connect} from "react-redux";

const TodoList = ({todos}) => {
    return (
        <div className="TodoList">
            <ul className="todos">
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span className="date">{todo.date}</span>
                        <span className="name">{todo.name}</span>
                        <span className="done">{todo.done}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        todos: state.todo
    };
}

export default connect(mapStateToProps)(TodoList);