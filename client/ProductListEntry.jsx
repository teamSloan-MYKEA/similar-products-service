import React from 'react';
import styled from 'styled-components';

const Product = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap');
  font-family: 'Noto Sans';
  font-weight: regular;
  font-size: 12px;
  width: 25vw;
  margin: 2px;
`;
const ProductName = styled.div`
  line-height: 1.42857;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 14px;
`;
const ProductDescription = styled.div`
  font-size: 14px;
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
  top: 4px;
`;
const MoreOptions = styled.div`
`;

const Image = styled.img`
  width: 20vw;
`;

class ProductListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: this.props.product.photo1,
    }
  }

  render() {
    const { photo1, photo2, name, description, price } = this.props.product;
    return (
      <Product>
        <Image
          src={photo1}
          onMouseOver={e => (e.target.src = photo2)}
          onMouseOut={e => (e.target.src = photo1)}
        >
        </Image>
        <ProductName>{name}</ProductName>
        <ProductDescription>{description}</ProductDescription>
        <ProductPrice>
          <PriceDetails style={{marginLeft: '-8px'}}>$</PriceDetails>
            {price}
          <PriceDetails>.00</PriceDetails>
          </ProductPrice>
        <div className="product-stars">stars</div>
        <MoreOptions>more options</MoreOptions>
      </Product>
    );
  }
}

export default ProductListEntry;
