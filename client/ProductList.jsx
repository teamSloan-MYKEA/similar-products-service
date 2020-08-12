import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProductListEntry from './ProductListEntry';

const ParentWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 450px;
  overflow: hidden;
  // background-color: red;
  // padding-right: 50px;
`;

const ProductsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: nowrap;
  // background-color: yellow;
  margin-left: 5px;
  margin-right: 5px;
`;

const ProductList = ({ index, products, onLikeBagClick }) => (
  <ParentWrapper>
    <ProductsContainer style={{ transform: `translateX(-${index * 8.4}%)` }}>
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
