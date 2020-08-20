import styled from 'styled-components';

const MainContainer = styled.div`

`;

const TitleContainer = styled.div`
`;

const SimilarProductsTitle = styled.h1`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap');
font-family: 'Noto Sans';
font-weight: 700;
font-size: 30px;
`;

const SimilarProductsContainer = styled.div`
  display: flex;
  width: 90vw;
  height: 40vh;
  // background-color: green;
  padding-right: 50px;
  padding-left: 15px;
`;

const ArrowContainer = styled.div`
  height: 450px;
  width: 20px;
`;

export {
  MainContainer,
  TitleContainer,
  SimilarProductsTitle,
  SimilarProductsContainer,
  ArrowContainer,
};
