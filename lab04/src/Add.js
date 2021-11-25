import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {v4} from "uuid";
import {addMovie, addDirector} from "./ducks/actions";

function Add(props) {
    const dispatch = useDispatch();

    const initMovie = {
        title: "",
        year: 2000
    }

    const initDirector = {
        firstName: "",
        lastName: "",
        age: 0
    }

    const initActor = {
        firstName: "",
        lastName: "",
        age: 0
    }

    const handleSubmit = (values, actions) => {
        switch (props.itemType) {
            case "movie":
                try {
                    console.log("Trying to dispatch: ", values);
                    dispatch(addMovie({id: v4(), ...values}));
                    return actions.resetForm();
                } catch (error) {
                    return console.error(error);
                }
            case "director":
                try {
                    console.log("Trying to dispatch: ", values);
                    dispatch(addDirector({id: v4(), ...values}));
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
                        <Field name="title" type="text"/>
                        <Field name="year" type="number"/>
                        <button type="submit">Add</button>
                    </Form>
                );
            case "director":
                return (
                    <Form>
                        <Field name="firstName" type="text"/>
                        <Field name="lastName" type="text"/>
                        <Field name="age" type="number"/>
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
                initialValues={props.itemType === "movie" ? initMovie : props.itemType === "director" ? initDirector : initActor}
                onSubmit={handleSubmit}
            >
                {fields}
            </Formik>
        </div>
    );
}

export default Add
