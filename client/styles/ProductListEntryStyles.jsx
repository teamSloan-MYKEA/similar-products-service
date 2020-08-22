import styled from 'styled-components';

const MainProductContainer = styled.div`
`;

const Product = styled.div`
  // @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap');
  font-family: 'Noto Sans';
  font-weight: regular;
  font-size: 15px;
  width: 11vw;
  position:relative;
  margin: 1.6vw;
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;
const ProductName = styled.div`
  line-height: 1.42857;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 14px;
`;
const ProductDescription = styled.div`
  font-size: 14px;
  color: rgb(74,74,74);
`;
const ProductPrice = styled.div`
  font-size: 22px;
  font-weight: 800;
  position: relative;
  margin-left: 10px;
`;
const PriceDetails = styled.div`
  display: inline;
  position: absolute;
  font-size: 12px;
  top: 15%;
`;
const MoreOptions = styled.div`
  color: rgb(74,74,74);
`;

const Image = styled.img`
  width: 100%;
`;

const HeartContainer = styled.div`
  height: 15px;
  opacity: ${(props) => (props.like ? '.8' : '.5')};
`;

const HeartStyle = {
  position: 'relative',
  left: '94%',
  transform: 'scale(1.2)',
  height: '20px',
};

const BagContainer = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 82%;
  left: 86%;
`;

export {
  MainProductContainer,
  Product,
  ProductName,
  ProductDescription,
  ProductPrice,
  PriceDetails,
  MoreOptions,
  Image,
  HeartContainer,
  HeartStyle,
  BagContainer,
};
