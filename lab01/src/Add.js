import React from 'react';
import { useFormik } from 'formik';
import axios from "axios";

const Add = () => {
    const formik = useFormik({
        initialValues: {
            title: "Product",
            price: 0,
            description: "",
            image: "",
            category: "default"
        },
        onSubmit: values => {
            axios
                .post('https://fakestoreapi.com/products', {
                    title: values.title,
                    price: values.price,
                    description: values.description,
                    image: values.image,
                    category: values.category
                })
                .then(res => console.log(res.status))
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