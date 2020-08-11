import React from 'react';
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

const ProductList = (props) => (
  <ParentWrapper>
    <ProductsContainer style={{ transform: `translateX(-${props.index * 8.4}%)` }}>
      {props.products.map((product) => <ProductListEntry product={product} />)}
    </ProductsContainer>
  </ParentWrapper>
);

export default ProductList;
