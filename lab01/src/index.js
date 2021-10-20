import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import axios from "axios";
import {Formik} from "formik";

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
        console.log("Sending query to API ...")
        axios
            .get('https://fakestoreapi.com/products')
            // get returns the promise that should be handled
            .then(res => {
                setAll(res.data);
                console.log(res.status);
            })
            .catch(err => console.log(err.id));
        console.log("Query has been send.")
    }, []);

    const toList = (arr) => arr.map(item => (
        /** Function (arr: Array)
         * toList is supposed to take state
         * which have to be an array and map
         * it to multiple li elements for later
         * return.
         */
        <li key={item.id}>
            <span className="id">{item.id}</span>
            <span className="title">{item.title}</span>
            <span className="price">{item.price}</span>
            <span className="category">{item.category}</span>
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
     * Form is controlled by Formik and on
     * submit is passed through axios post
     * to remote server.
     */

    return (
        <div className="Add">
            <Formik initialValues={
                {
                    description: "",
                    image: ""
                }
            } onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}>
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleSubmit = values => {
                          axios
                              .post('https://fakestoreapi.com/products', {
                                  title: values.title,
                                  price: values.price,
                                  description: values.description,
                                  image: values.image,
                                  category: values.category
                              })
                              .then(res => {
                                  console.log("POST request has been send.");
                                  window.location.href="/";
                              })
                              .catch(err => {
                                  console.log(err.status);
                              });
                      },
                      isSubmitting
                  }) => (
                      <form onSubmit={handleSubmit(values)}>
                          <label>
                              Name:
                              <input name="title" type="text" onChange={handleChange} value={values.title} required={true} placeholder="SampleProduct"/>
                          </label>
                          <label>
                              Price:
                              <input name="price" type="text" onChange={handleChange} value={values.price} required={true} placeholder="0.00"/>
                          </label>
                          <label>
                              Description:
                              <input name="description" type="text" onChange={handleChange} value={values.description} placeholder="Blah blah blah ..."/>
                          </label>
                          <label>
                              Picture:
                              <input name="image" type="url" onChange={handleChange} value={values.image} placeholder="https://www.samplePage.com"/>
                          </label>
                          <label>
                              Category:
                              <input name="category" type="text" onChange={handleChange} value={values.category} required={true} placeholder="Antiques"/>
                          </label>
                      </form>
                )}
            </Formik>
        </div>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <List/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
