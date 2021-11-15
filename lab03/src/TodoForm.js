import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {v4} from "uuid";
import {addTodo, updateTodo} from "./TodoActions";

const TodoForm = (props) => {
    const dispatch = useDispatch();

    const handleAdd = (values, actions) => {
        try {
            dispatch(addTodo({id: v4(), ...values}));
            actions.resetForm();
        } catch (error) {
            console.error(error);
        }
    }

    const handleUpdate = values => {
        try {
            dispatch(updateTodo({id: props.payload.id, ...values}));
            props.setEdit({edit: false, payload: {}});
            console.log('Handled update for values: ', values);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="TodoForm">
            {props.type === 'ADD_TODO' ? <h3>Add Todo:</h3> : <h3>Edit Todo:</h3>}
            <Formik
                initialValues={{
                    name: props.type === 'ADD_TODO' ? "" : props.payload.name,
                    date: props.type === 'ADD_TODO' ? "" : props.payload.date,
                    done: props.type === 'ADD_TODO' ? false : props.payload.done
                }}
                onSubmit={props.type === 'ADD_TODO' ? handleAdd : handleUpdate}
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

                    {props.type === 'ADD_TODO'
                        ? <button type="submit">Add</button>
                        : <button type="submit">Save</button>}
                </Form>
            </Formik>
        </div>
    );
}

export default TodoForm