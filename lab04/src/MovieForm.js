import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {v4} from "uuid";
import { addMovie } from "./movieActions";

const MovieForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = (values, actions) => {
        try {
            dispatch(addMovie({id: v4(), ...values}));
            actions.restForm();
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="MovieForm">
            <Formik
                initialValues={{
                    title: "",
                    year: 2000
                }} 
                onSubmit={handleSubmit}>
                    <Form>
                        <label>
                            Title:
                            <Field name="title"/>
                        </label>
                        <label>
                            Year of production:
                            <Field name="year" type="number"/>
                        </label>
                    </Form>
            </Formik>
        </div>
    )
}

export default MovieForm