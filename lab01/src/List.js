import React, {useEffect, useState} from 'react';
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

export default List