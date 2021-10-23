import React from 'react';
import { useFormik } from 'formik';
import axios from "axios";

const validate = values => {
    const errors = {};

    if (!values.title) {
        errors.title = 'Required'
        console.log('No title!')
    } else if (values.title.length > 50) {
        errors.title = 'Must be less than 50 characters long!'
        console.log('Wrong title!')
    }

    if (!values.price) {
        errors.title = 'Required'
        console.log('No price!')
    } else if (!/^\d+(\.\d{2})?$/.test(values.price.toString())) {
        errors.price = 'Use following price format: ^[0-9]+(\\.[0-9][0-9])'
        console.log(`Wrong price: ${values.price}`)
    }

    if (values.image.length > 0 && !/^https?:\/\/www\.\w+(\d+)?\.\w+$/.test(values.image)) {
        errors.image = 'Invalid image URL!'
        console.log('Wrong URL!')
    }

    if (!values.category) {
        errors.category = 'Required'
        console.log('No category!')
    }

    return errors
};

const Add = () => {
    const formik = useFormik({
        initialValues: {
            title: "Product",
            price: 0.00,
            description: "",
            image: "",
            category: "default"
        },
        validate,
        onSubmit: values => {
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
        },
    });
    return (
        <div className="Add">
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="title">Name:</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                />

                <label htmlFor="price">Price:</label>
                <input
                    id="price"
                    name="price"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.price}
                />

                <label htmlFor="description">Description:</label>
                <input
                    id="description"
                    name="description"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                />

                <label htmlFor="image">Picture:</label>
                <input
                    id="image"
                    name="image"
                    type="url"
                    onChange={formik.handleChange}
                    value={formik.values.image}
                />

                <label htmlFor="category">Category:</label>
                <input
                    id="category"
                    name="category"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.category}
                />

                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default Add