import {Field, Form, Formik} from "formik";
import React from "react";
import YupValidationSchema from "./YupValidationSchema";

const ProductForm = (props) => (
    <Formik
        initialValues={{
            title: props.title,
            price: props.price,
            description: props.description,
            image: props.image,
            category: props.category
        }}
        validationSchema={YupValidationSchema}
        onSubmit={props.handleSubmit}
    >
        {({errors, touched}) => (
            <Form>
                <Field name="title"/>
                {touched.title && errors.title && <div>{errors.title}</div>}

                <Field name="price"/>
                {touched.price && errors.price && <div>{errors.price}</div>}

                <Field name="description"/>

                <Field name="image"/>
                {touched.image && errors.image && <div>{errors.image}</div>}

                <Field name="category"/>

                <button type="submit">Add</button>
            </Form>
        )}
    </Formik>
);

export default ProductForm