import React from "react";
import axios from "axios";
import ProductForm from "./ProductForm";


const Set = (props) => {

    const handleSubmit = type => {
        /** Function (type: String)
         * Handles submit depending on the value
         * of the type variable.
         */

        return (values, actions) => {
            const data = {
                title: values.title,
                price: values.price,
                description: values.description,
                image: values.image,
                category: values.category
            } // Object which stores the data for axios query

            switch (type) {
                default:
                    // In case of POST method:
                    axios.post("https://fakestoreapi.com/products", data)
                        .then(res => {
                            console.log(res.status);
                            console.log(res.data);
                        })
                        .catch(err => console.error(err));
                    return actions.resetForm();

                case "PUT":
                    // In case of PUT method
                    axios.put("https://fakestoreapi.com/products", data)
                        .then(res => {
                            console.log(res.status);
                            console.log(res.data);
                        })
                        .catch(err => console.error(err));
                    return props.setShowEdit(false);
            }
        }
    }

    return (
        <div className="setForm">
            <ProductForm
                title={props.title}
                price={props.price}
                description={props.description}
                image={props.image}
                category={props.category}
                handleSubmit={handleSubmit(props.type)}
            />
        </div>
    );
}

export default Set;
