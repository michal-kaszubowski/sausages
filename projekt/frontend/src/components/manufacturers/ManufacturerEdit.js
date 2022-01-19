import {Field, Form, Formik} from "formik";
import manufacturerValidationSchema from "../../manufacturerValidationSchema";
import {connect, useDispatch} from "react-redux";
import {updateManufacturer} from "../../ducks/manufacturers/operations";
import {useNavigate} from "react-router-dom";

const ManufacturerEdit = ({cache}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="Add">
            <div className="header">
                <button id="back" onClick={() => navigate("/manufacturers")}>&larr;</button>
            </div>
            <Formik
                initialValues={{
                    name: cache.name,
                    origin: cache.origin || null,
                    established: cache.established
                }}
                validationSchema={manufacturerValidationSchema}
                onSubmit={values => {
                    dispatch(updateManufacturer({_id: cache._id, ...values}));
                    navigate("/manufacturers");
                }}
            >
                {({errors, touched}) => (
                    <Form>
                        <label id="name">
                            <span>Nazwa</span>
                            <Field name="name"/>
                            <span>*</span>
                            {touched.name && errors.name && <div>{errors.name}</div>}
                        </label>

                        <label>
                            <span>Pochodzenie</span>
                            <Field name="origin"/>
                            {touched.origin && errors.origin && <div>{errors.origin}</div>}
                        </label>

                        <label>
                            <span>Rok założenia</span>
                            <Field name="price"/>
                            {touched.established && errors.established && <div>{errors.established}</div>}
                            <span>*</span>
                        </label>

                        <button type="submit">&#10003;</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

const mapStateToProps = state => ({cache: state.cache});

export default connect(mapStateToProps)(ManufacturerEdit);
