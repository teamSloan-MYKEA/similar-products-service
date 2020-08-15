import React from 'react';
import PropTypes from 'prop-types';
import ProductListEntry from './ProductListEntry';
import { ParentWrapper, ProductsContainer } from './styles/ProductListStyles';

const ProductList = ({ index, products, onLikeBagClick }) => (
  <ParentWrapper>
    <ProductsContainer style={{ transform: `translateX(-${index * 8.35}%)` }}>
      {products.map((product) => (
        <ProductListEntry product={product} onLikeBagClick={onLikeBagClick} />))}
    </ProductsContainer>
  </ParentWrapper>
);

ProductList.propTypes = {
  index: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  onLikeBagClick: PropTypes.func.isRequired,
};

export default ProductList;
