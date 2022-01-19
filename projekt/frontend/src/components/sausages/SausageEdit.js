import {Field, Form, Formik} from "formik";
import sausageValidationSchema from "../../sausageValidationSchema";
import {connect, useDispatch} from "react-redux";
import {updateSausage} from "../../ducks/sausages/operations";
import {useNavigate} from "react-router-dom";

const SausageEdit = ({state}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cache = state.cache;

    return (
        <div className="Add">
            <div className="header">
                <button id="back" onClick={() => navigate("/")}>&larr;</button>
            </div>
            <Formik
                initialValues={{
                    type: cache.type,
                    origin: cache.origin || null,
                    price: cache.price,
                    image: cache.image || null,
                    manufacturer: cache.manufacturer._id,
                    spice: cache.spice ? () => cache.spice._id : null
                }}
                validationSchema={sausageValidationSchema}
                onSubmit={values => {
                    dispatch(updateSausage({_id: cache._id, ...values}));
                    navigate("/");
                }}
            >
                {({errors, touched}) => (
                    <Form>
                        <Field name="type"/>
                        {touched.type && errors.type && <div>{errors.type}</div>}

                        <Field name="origin"/>
                        {touched.origin && errors.origin && <div>{errors.origin}</div>}

                        <Field name="price"/>
                        {touched.price && errors.price && <div>{errors.price}</div>}

                        <Field name="image"/>
                        {touched.image && errors.image && <div>{errors.image}</div>}

                        <Field as="select" name="manufacturer">
                            <option value={null} key={0}>-</option>
                            {state.manufacturers.map(manufacturer => (
                                <option value={manufacturer._id} key={manufacturer._id}>{manufacturer.name}</option>
                            ))}
                        </Field>
                        {touched.manufacturer && errors.manufacturer && <div>{errors.manufacturer}</div>}

                        <Field as="select" name="spice">
                            <option value={null} key={0}>-</option>
                            {state.spices.map(spice => (
                                <option value={spice._id} key={spice.name}>{spice.name}</option>
                            ))}
                        </Field>
                        {touched.spice && errors.spice && <div>{errors.spice}</div>}

                        <button type="submit">&#10003;</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

const mapStateToProps = state => ({state});

export default connect(mapStateToProps)(SausageEdit);
