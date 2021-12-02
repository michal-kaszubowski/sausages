import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {v4} from "uuid";
import {addMovie} from "./ducks/movies/actions";
import {addDirector} from "./ducks/directors/actions";

const Add = props => {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        console.log("Received values: ", values);
        switch (props.itemType) {
            case "movie":
                try {
                    dispatch(addMovie({
                        id: v4(),
                        title: values.title,
                        year: values.year
                    }));
                    return actions.resetForm();
                } catch (error) {
                    return console.error(error);
                }
            case "director":
                try {
                    dispatch(addDirector({
                        id: v4(),
                        firstName: values.firstName,
                        lastName: values.lastName,
                        age: values.age
                    }));
                    return actions.resetForm();
                } catch (error) {
                    return console.error(error);
                }
            default:
                return console.error("Error! Mismatching itemType, dispatching values failed.")
        }
    }

    const fields = () => {
        switch (props.itemType) {
            case "movie":
                return (
                    <Form>
                        <label>
                            Title:
                            <Field name="title" type="text"/>
                        </label>
                        <label>
                            Year:
                            <Field name="year" type="number"/>
                        </label>
                        <button type="submit">Add</button>
                    </Form>
                );
            case "director":
                return (
                    <Form>
                        <label>
                            Name:
                            <Field name="firstName" type="text"/>
                        </label>
                        <label>
                            Surname:
                            <Field name="lastName" type="text"/>
                        </label>
                        <label>
                            Age:
                            <Field name="age" type="number"/>
                        </label>
                        <button type="submit">Add</button>
                    </Form>
                );
            default:
                return console.error("Error! Mismatching itemType, generating form impossible.")
        }
    }

    return (
        <div className="Add">
            <Formik
                initialValues={{
                    title: "",
                    year: 0,
                    firstName: "",
                    lastName: "",
                    age: 0
                }}
                onSubmit={handleSubmit}
            >
                {fields}
            </Formik>
        </div>
    );
}

export default Add
