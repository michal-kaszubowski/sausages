import React from 'react';
import axios from "axios";
import ProductForm from "./ProductForm";

const handleSubmitFunction = () => {
    return (values, actions) => {
        axios
            .put('https://fakestoreapi.com/products', {
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
        actions.resetForm()
    }
}

const Edit = (props) => (
    <div className="editForm">
        <ProductForm title={props.title} price={props.price} description={props.description} image={props.image} category={props.category} handleSubmit={handleSubmitFunction()}/>
    </div>
);

export default Edit