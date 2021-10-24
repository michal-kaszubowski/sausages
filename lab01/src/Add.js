import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from "axios";

const validationSchema = Yup.object().shape({
    title: Yup.string()
        .required('No title')
        .min(3, 'To short'),
    price: Yup.number()
        .required('No price')
        .moreThan(0, 'Has to be more than 0'),
    image: Yup.string()
        .url('Invalid URL')
})

const Add = () => (
    <div className="Add">
        <Formik
            initialValues={{
                title: "Product",
                price: 0,
                description: "",
                image: "",
                category: "default"
            }}
            validationSchema={validationSchema}
            onSubmit={values => {
                axios
                    .post('https://fakestoreapi.com/products', {
                        title: values.title,
                        price: values.price,
                        description: values.description,
                        image: values.image,
                        category: values.category
                    })
                    .then(res => {
                        console.log(res.status)
                        console.log(res.data)
                    })
                    .catch(err => console.log(err.status));
            }}
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
    </div>
);

export default Add