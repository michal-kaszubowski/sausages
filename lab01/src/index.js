import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import ProductForm from  './ProductForm';

ReactDOM.render(
  <React.StrictMode>
      <ProductList />
      <ProductDetails />
      <ProductForm />
  </React.StrictMode>,
  document.getElementById('root')
);
