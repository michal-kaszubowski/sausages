import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {v4} from "uuid";
import {addTodo} from "./TodoActions";

const TodoForm = () => {
    const dispatch = useDispatch()

    const handleSubmit = values => {
        dispatch(addTodo(values));
    }

    return (
        <div className="TodoForm">
            <h3>Add ToDo:</h3>
            <Formik
                initialValues={{
                    id: v4(),
                    name: "",
                    date: null,
                    done: false
                }}
                onSubmit={handleSubmit}
            >
                <Form>
                    <Field name="name"/>

                    <Field name="date" type="date"/>

                    <Field name="done" type="checkbox"/>

                    <button type="submit">Add</button>
                </Form>
            </Formik>
        </div>
    );
}

export default TodoForm