import {useState, useEffect} from "react"
import axios from "axios";

function ProductDetails() {
    let url = window.location.href;
    const searchParams = new URLSearchParams(url);
    const id = searchParams.get("http://localhost:3000/?id");

    const [details, setDetails] = useState([]);
    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then(response => setDetails(response.data));
    }, [id]);

    return (
        <div>
            <>{details.id}</>
            <>{details.title}</>
            <>{details.category}</>
            <>{details.price}</>
        </div>
    );
}

export default ProductDetails;
