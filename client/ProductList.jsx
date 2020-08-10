import React from 'react';
import ProductListEntry from './ProductListEntry';

const ProductList = (props) => {
  return (
    <div>
      <h1>Similar Products</h1>
      <div className="products-container" style={{ display: 'flex' }} onClick={props.onClick}>
        {props.productsInView.map((product) => <ProductListEntry product={product} />)}
      </div>
    </div>
  )
};

export default ProductList;
