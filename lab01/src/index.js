import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import axios from "axios";

function List() {
    /** List function component
     * This component is supposed to display all
     * items from external API.
     * In order to do this List would use axios
     * asynchronous query and set the state with
     * the response. Later this state should be
     * returned as a list of items.
     */

    const [all, setAll] = useState([]);
    useEffect(() => {
        console.log("Sending query to API ...");
        axios
            .get('https://fakestoreapi.com/products')
            // get returns the promise that should be handled
            .then(res => {
                setAll(res.data);
                console.log(res.status);
            })
            .catch(err => console.log(err.status));
        console.log("GET query has been send.");
    }, []);

    const toList = (arr) => arr.map(item => (
        /** Function (arr: Array)
         * toList is supposed to take state
         * which have to be an array and map
         * it to multiple li elements for later
         * return.
         */

        <li key={item.id}>
            <span className="id">{item.id}</span> <span className="title">{item.title}</span> <span className="price">{item.price}</span> <span className="category">{item.category}</span>
        </li>
    ));

    return (
        <ul>
            {toList(all)}
        </ul>
    );

}

function Add() {
    /** Add function component
     * This component renders form
     * for user to add new product to API.
     * Form values are controlled by state
     * and on submit state is passed through
     * axios post to remote server.
     */

    const [values, setValues] = useState({
        title: "Product",
        price: 0,
        description: "",
        image: "",
        category: "default"
    });
    const handleChange = event => {
        setValues({ [event.target.name]: event.target.value });
        console.log(values);
    }
    const handleSubmit = event => {
        console.log(values)
        axios
            .post('https://fakestoreapi.com/products', {
                title: values.title,
                price: values.price,
                description: values.description,
                image: values.image,
                category: values.category
            })
            .then(res => console.log(res.status))
            .catch(err => console.log(err.status))
    }

    return (
        <div className="Add">
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input name="title" type="text" onChange={handleChange} required={true}/>
                </label>
                <label>
                    Price:
                    <input name="price" type="number" onChange={handleChange} required={true}/>
                </label>
                <label>
                    Description:
                    <input name="description" type="text" onChange={handleChange} placeholder="Blah blah blah ..."/>
                </label>
                <label>
                    Picture:
                    <input name="image" type="url" onChange={handleChange} placeholder="https://www.samplePage.com"/>
                </label>
                <label>
                    Category:
                    <input name="category" type="text" onChange={handleChange} required={true}/>
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <List />
        <Add />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
