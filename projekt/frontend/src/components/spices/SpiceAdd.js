import {Field, Form, Formik} from "formik";
import spiceValidationSchema from "../../spiceValidationSchema";
import {useDispatch} from "react-redux";
import {addSpice} from "../../ducks/spices/operations";
import {useNavigate} from "react-router-dom";

const SpiceAdd = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="Add">
            <div className="header">
                <button id="back" onClick={() => navigate("/spices")}>&larr;</button>
            </div>
            <Formik
                initialValues={{
                    name: "",
                    origin: "",
                    price: 0
                }}
                validationSchema={spiceValidationSchema}
                onSubmit={values => {
                    dispatch(addSpice(values));
                    navigate("/spices");
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
                            <span>Cena za 100g</span>
                            <Field name="price"/>
                            {touched.price && errors.price && <div>{errors.price}</div>}
                            <span>*</span>
                        </label>

                        <button type="submit">&#10003;</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default SpiceAdd;
