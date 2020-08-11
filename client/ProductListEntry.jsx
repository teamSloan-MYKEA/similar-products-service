import React from 'react';
import styled from 'styled-components';

const Product = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
  font-family: 'Noto Sans';
  // flex: 1;
  // max-width: 200px;
  width: 150px;
  padding: 2px;
`;
const ProductName = styled.div`
  font-size: .875rem;
  line-height: 1.42857;
  font-weight: 700;
  text-transform: uppercase;
`;
const ProductDescription = styled.div`
  font-size: 14px;
`;
const ProductPrice = styled.div`
  font-size: 22px;
`;
const MoreOptions = styled.div`
  font-size: 12px;
`;

const Image = styled.img`
width: 30vh;
margin: 15px;

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
        onMouseOver={e=> (e.target.src = photo2)}
        onMouseOut={e=> (e.target.src = photo1)}>

        </Image>
        <ProductName>{name}</ProductName>
        <ProductDescription>{description}</ProductDescription>
        <ProductPrice>{price}</ProductPrice>
        <div className="product-stars">stars</div>
        <MoreOptions>more options</MoreOptions>
      </Product>
    );
  }
}

export default ProductListEntry;
