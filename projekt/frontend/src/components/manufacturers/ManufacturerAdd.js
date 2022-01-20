import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import manufacturerValidationSchema from "../../validation/manufacturerValidationSchema";
import {addManufacturer} from "../../redux/manufacturers/operations";
import {useNavigate} from "react-router-dom";

const ManufacturerAdd = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="Add">
            <div className="header">
                <button id="back" onClick={() => navigate("/manufacturers")}>&larr;</button>
            </div>
            <Formik
                initialValues={{
                    name: "",
                    origin: "",
                    established: 0
                }}
                validationSchema={manufacturerValidationSchema}
                onSubmit={values => {
                    dispatch(addManufacturer(values));
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

export default ManufacturerAdd;
