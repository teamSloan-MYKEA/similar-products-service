import React from 'react';

class ProductListEntry extends React.Component {
  render() {
    return (
      <div className="product">
        <div className="product-img">pic</div>
        <div className="product-name">name</div>
        <div className="product-description"description></div>
        <div className="product-price">price</div>
        <div className="product-stars">stars</div>
        <div className="more-options">more options</div>
      </div>
    );
  }
}

export default ProductListEntry;
