import styled from 'styled-components';

const ParentWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-x: scroll;
  overflow-y: hidden;
  // background-color: red;
  scroll-snap-type: x mandatory;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 15px;
    height: 5px;
    background: rgb(239, 239, 239);
    border-radius: 5px;
  };
  &::-webkit-scrollbar-thumb {
    -webkit-appearance: none;
    width: 2px;
    height: 5px;
    background: rgb(74,74,74);
    border-radius: 10px;
  };
`;

const ProductsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: nowrap;
  // background-color: yellow;
  margin-left: 5px;
  margin-right: 5px;
  scroll-snap-align: start;
  transition: transform 100ms cubic-bezier(0.4, 0, 0.4, 1);
`;

export {
  ParentWrapper,
  ProductsContainer,
};
