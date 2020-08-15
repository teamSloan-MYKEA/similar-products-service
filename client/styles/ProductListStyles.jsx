import React from 'react';
import styled from 'styled-components';

const ParentWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 500px;
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
  transition: transform 100ms cubic-bezier(0.4, 0, 0.4, 1);
`;

export {
  ParentWrapper,
  ProductsContainer,
}