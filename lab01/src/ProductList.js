import {useState, useEffect} from "react";
import axios from "axios";

function ProductList() {
    const [allProducts, setProducts] = useState([]);
    useEffect(() => {
        axios
            .get('https://fakestoreapi.com/products')
            .then(response => setProducts(response.data))
    }, []);

    return allProducts.map(product => (
        <div>
            <a href={`?id=${product.id}`}>{product.title}</a>
            <>{product.price}</>
        </div>
    ));
}

export default ProductList;
