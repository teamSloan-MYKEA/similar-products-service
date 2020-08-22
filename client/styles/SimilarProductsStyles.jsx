import styled from 'styled-components';

const MainContainer = styled.div`

`;

const TitleContainer = styled.div`
`;

const SimilarProductsTitle = styled.h1`
// @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap');
font-family: 'Noto Sans';
font-weight: 700;
font-size: 25px;
padding-left: 5px;
`;

const SimilarProductsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40%;
  // background-color: green;
  padding-right: 50px;
  // padding-left: 15px;
`;

const ArrowContainer = styled.div`
  height: 450px;
  width: 100px;
`;

export {
  MainContainer,
  TitleContainer,
  SimilarProductsTitle,
  SimilarProductsContainer,
  ArrowContainer,
};
