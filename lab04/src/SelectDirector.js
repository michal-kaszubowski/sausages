import {connect} from "react-redux";
import {Field, Form, Formik} from "formik";
import {addDirectorToMovie} from "./ducks/movies/actions";

const SelectDirectors = ({directors, addDirectorToMovie}, props) => {

    const handleSubmit = (values, actions) => {
        try {
            addDirectorToMovie({id: props.id, director: values});
            return actions.resetForm();
        } catch (error) {
            return console.error(error);
        }
    }

    return (
        <div className="SelectDirector">
            <Formik initialValues={{selected: ""}} onSubmit={handleSubmit}>
                <Form>
                    <label>
                        Select Director:
                        <Field as="select" name="director">
                            {directors.map(director => (
                                <option value={director}>{director.firstName} {director.lastName}</option>
                            ))}
                        </Field>
                    </label>
                    <button type="submit">✔️</button>
                </Form>
            </Formik>
        </div>
    );
}

const mapStateToProps = state => ({directors: state.directors});

const mapDispatchToProps = {addDirectorToMovie};

export default connect(mapStateToProps, mapDispatchToProps)(SelectDirectors);
