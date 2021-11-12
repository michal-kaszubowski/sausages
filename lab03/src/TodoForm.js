import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {v4} from "uuid";
import {addTodo} from "./TodoActions";

const TodoForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = values => {
        try {
            dispatch(addTodo(values));
        } catch (error) {
            console.error(error);
        }
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
                    <label>
                        Name:
                        <Field name="name"/>
                    </label>

                    <label>
                        Till:
                        <Field name="date" type="date"/>
                    </label>

                    <label>
                        Done:
                        <Field name="done" type="checkbox"/>
                    </label>

                    <button type="submit">Add</button>
                </Form>
            </Formik>
        </div>
    );
}

export default TodoForm