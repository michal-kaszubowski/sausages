import {Field, Form, Formik} from "formik";
import {useDispatch, connect} from "react-redux";
import {updatePack} from "../ducks/actions";

const GiftForm = ({packs}) => {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        try {
            dispatch(updatePack({values}));
            actions.resetForm();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="giftForm">
            <Formik initialValues={{
                addressee: "",
                category: "",
                gift: "",
                wishes: "",
                express: false
            }} onSubmit={handleSubmit}>
                <Form>
                    <Field as="select" name="addressee">
                        {packs.map(pack => (
                            <option value={pack.addressee}>{pack.addressee}</option>
                        ))}
                    </Field>
                    <Field as="select" name="category">
                        <option value="toys">Toys</option>
                        <option value="books">Books</option>
                        <option value="rtv">RTV</option>
                        <option value="agd">AGD</option>
                    </Field>
                    <Field name="gift">Name:</Field>
                    <Field name="wishes">Your wishes:</Field>
                    <Field as="checkbox" name="express">Are you willing to pay for faster delivery?</Field>
                    <button type="submit">Add!</button>
                </Form>
            </Formik>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        packs: state.packs
    };
}

export default connect(mapStateToProps, GiftForm);
