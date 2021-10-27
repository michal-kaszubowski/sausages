import React from 'react';
import axios from "axios";
import ProductForm from "./ProductForm";

const handleSubmitFunction = () => {
    return (values, actions) => {
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
        actions.resetForm()
    }
}

const Add = () => (
    <div className="Add">
        <ProductForm title="ProductName" price={0} description="" image="" category="DefaultCategory" handleSubmit={handleSubmitFunction()}/>
    </div>
);

export default Add