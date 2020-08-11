import React from 'react';
import ProductListEntry from './ProductListEntry';
import styled from 'styled-components';

const ParentWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 450px;
  overflow: hidden;
  // background-color: red;
`;

const ProductsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: nowrap;
  // background-color: yellow;
`;

const ProductList = (props) => (
  <ParentWrapper>
      <ProductsContainer style={{transform: `translateX(-${props.index * 8.3}%)`}}>
        {props.products.map((product) => <ProductListEntry product={product} />)}
      </ProductsContainer>
  </ParentWrapper>
);

export default ProductList;
