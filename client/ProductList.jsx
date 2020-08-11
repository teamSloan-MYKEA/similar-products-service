import React from 'react';
import ProductListEntry from './ProductListEntry';
import styled from 'styled-components';

const ParentWrapper = styled.div`
  position: relative;
  display: block;
  width: 614px;
  height: 300px;
  border: 1px black solid;
  overflow: hidden;
  background-color: red;
`;

const ProductsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: nowrap;
  height: fit-content;
  background-color: yellow;
`;

const ProductList = (props) => (
  <ParentWrapper>
      <ProductsContainer>
        {props.products.map((product) => <ProductListEntry product={product} />)}
      </ProductsContainer>
  </ParentWrapper>
);

export default ProductList;
