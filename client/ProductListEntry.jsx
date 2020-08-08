import React from 'react';

// class ProductListEntry extends React.Component {
// render() {
const ProductListEntry = ({ product }) => {
  const { photo1, name, description, price } = product;
  return (
    <div className="product">
      <img className="product-img" src={photo1} alt="product" style={{ maxHeight: '10vh' }} />
      <div className="product-name">{name}</div>
      <div className="product-description">{description}</div>
      <div className="product-price">{price}</div>
      <div className="product-stars">stars</div>
      <div className="more-options">more options</div>
    </div>
  );
  // }
};

export default ProductListEntry;
