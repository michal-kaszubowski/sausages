import {Field, Form, Formik} from "formik";
import sausageValidationSchema from "../../sausageValidationSchema";
import {connect, useDispatch} from "react-redux";
import {addSausage} from "../../ducks/sausages/operations";
import {useNavigate} from "react-router-dom";

const SausageAdd = ({manufacturers, spices}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="Add">
            <div className="header">
                <button id="back" onClick={() => navigate("/")}>&larr;</button>
            </div>
            <Formik
                initialValues={{
                    type: "",
                    origin: null,
                    price: 0,
                    image: null,
                    manufacturer: "",
                    spice: null
                }}
                validationSchema={sausageValidationSchema}
                onSubmit={values => {
                    dispatch(addSausage(values));
                    navigate("/");
                }}
            >
                {({errors, touched}) => (
                    <Form>
                        <label id="type">
                            <span>Rodzaj</span>
                            <Field name="type"/>
                            <span>*</span>
                            {touched.type && errors.type && <div>{errors.type}</div>}
                        </label>

                        <label>
                            <span>Pochodzenie</span>
                            <Field name="origin"/>
                            {touched.origin && errors.origin && <div>{errors.origin}</div>}
                        </label>

                        <label>
                            <span>Cena za kilogram</span>
                            <Field name="price"/>
                            {touched.price && errors.price && <div>{errors.price}</div>}
                            <span>*</span>
                        </label>

                        <label>
                            <span>Link do zdjęcia</span>
                            <Field name="image"/>
                            {touched.image && errors.image && <div>{errors.image}</div>}
                        </label>

                        <label>
                            <span>Producent</span>
                            <Field as="select" name="manufacturer">
                                <option value="" key={0}>-</option>
                                {manufacturers.map(manufacturer => (
                                    <option value={manufacturer._id} key={manufacturer._id}>{manufacturer.name}</option>
                                ))}
                            </Field>
                            {touched.manufacturer && errors.manufacturer && <div>{errors.manufacturer}</div>}
                            <span>*</span>
                        </label>

                        <label>
                            <span>Przyprawa</span>
                            <Field as="select" name="spice">
                                <option value={null} key={0}>-</option>
                                {spices.map(spice => (
                                    <option value={spice._id} key={spice.name}>{spice.name}</option>))}
                            </Field>
                            {touched.spice && errors.spice && <div>{errors.spice}</div>}
                        </label>

                        <button type="submit">&#10003;</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

const mapStateToProps = state => ({manufacturers: state.manufacturers, spices: state.spices});

export default connect(mapStateToProps)(SausageAdd);
