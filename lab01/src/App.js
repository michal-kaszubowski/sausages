import './App.css';
import {useState, useEffect} from "react";
import axios from "axios";

function App() {
  const [allProducts, setProducts] = useState([]);
  useEffect(() => {
    axios
        .get('https://fakestoreapi.com/products')
        .then(response => setProducts(response.data))
  }, []);

  return allProducts.map(product => (
      <ul>
          <li>{product.id}</li>
            <ul>
                <li>{product.title}</li>
                <li>{product.price}</li>
                <li>{product.category}</li>
            </ul>
      </ul>
  ));
}

export default App;
