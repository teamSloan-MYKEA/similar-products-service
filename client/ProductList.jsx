import React from 'react';
import PropTypes from 'prop-types';
import ProductListEntry from './ProductListEntry';
import { ParentWrapper, ProductsContainer } from './styles/ProductListStyles';

const ProductList = ({ index, products, onLikeBagClick, BAG, CHECKMARK }) => (
  <ParentWrapper>
    <ProductsContainer style={{ transform: `translateX(-${index * 8.43}%)` }}>
      {products.map((product) => (
        <ProductListEntry product={product} onLikeBagClick={onLikeBagClick} BAG={BAG}
        CHECKMARK={CHECKMARK}/>))}
    </ProductsContainer>
  </ParentWrapper>
);

ProductList.propTypes = {
  index: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  onLikeBagClick: PropTypes.func.isRequired,
};

export default ProductList;
