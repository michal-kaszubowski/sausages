import axios from "axios";

function ProductDetails() {
    const url = new URL(window.location.href);
    let searchParams = new URLSearchParams(url.search);
    if (searchParams.has('id')) {
        let id = searchParams.get('id');
        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                console.log(response.data.price)
                return (
                    <div>
                        <>{response.data.id}</>
                        <>{response.data.title}</>
                        <>{response.data.category}</>
                        <>{response.data.price}</>
                    </div>
                );
            });
    } else {
        console.log("Brak id");
        return null;
    }
}

export default ProductDetails;
