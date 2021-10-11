import axios from "axios";
import {Formik, Form, Field} from "formik";

function ProductForm() {
    const handleSubmit = values => {
        axios
            .post('https://fakestoreapi.com/products', {
            "title": values.title,
            "price": values.price,
            "description": values.description,
            "image": values.image,
            "category": values.category
            })
            .then(() => {
                alert("Poszło!")
                window.location.href="/"
            })
    }

    return (
        <div className={Form}>
            <h2>Add new product:</h2>
            <Formik initialValues={
                {
                    "title": "",
                    "price": 0,
                    "description": "",
                    "category": "other",
                    "image": "",
                    "submit": "Add"
                }
            } onSubmit={handleSubmit}>
                <Form>
                    <label>Title:
                        <Field name="title" type="text" placeholder="Long Jhon"/>
                    </label>
                    <label>Price:
                        <Field name="price" type="number" placeholder="0" step="0.01" min="0"/>
                    </label>
                    <label>Description:
                        <Field name="description" type="textarea" placeholder="Blah blah blah ..."/>
                    </label>
                    <label>Image URL:
                        <Field name="image" type="text" placeholder="https://example.com"/>
                    </label>
                    <label>Category:
                        <Field name="category" type="text" placeholder="Antiques"/>
                    </label>
                    <Field name="submit" type="submit"/>
                </Form>
            </Formik>
        </div>
    );
}

export default ProductForm;
