import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartSolid } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const MainProductContainer = styled.div`

`;

const Product = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap');
  font-family: 'Noto Sans';
  font-weight: regular;
  font-size: 12px;
  width: 20vw;
  position:relative;
  margin: 1vw;
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

const HeartStyle = {
  display: 'block',
  transform: 'scale(2)',
  height: '40px',
};

const EmptyDiv = styled.div`
  height: 40px;
`;

class ProductListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHeart: false,
      like: false,
    };
    this.onImageHover = this.onImageHover.bind(this);
    this.onHeartClick = this.onHeartClick.bind(this);
  }

  onImageHover() {
    const { like, showHeart } = this.state;
    // if (like) {
      this.setState({
        showHeart: !showHeart,
      // });
    })
    // else {
    //   this.setState({
    //     showHeart: !showHeart,
    //     showBag: !showBag,
    //   });
    // }
  }

  onHeartClick() {
    console.log('clicked')
    const { like } = this.state;
    const { onLikeBagClick, product } = this.props;
    const { name } = product;
    this.setState({
      like: !like,
    });
    onLikeBagClick(name);
  }

  render() {
    const {
      photo1, photo2, name, description, price,
    } = this.props.product;
    const { showHeart, like } = this.state;
    return (
      <MainProductContainer onMouseEnter={this.onImageHover} onMouseLeave={this.onImageHover}>
        {showHeart
          ? (
            <FontAwesomeIcon
              icon={like ? heartSolid : heartRegular}
              onClick={this.onHeartClick}
              style={{
              justifyContent: 'right',
              alignItems: 'right',
              transform: 'scale(1.2)',
              height: '40px',
              visibility: showHeart ? 'visible' : 'hidden',
              transition: 'visibility 3s linear'}}
            />
          )
          : <EmptyDiv />}
        <Product>
          <Image
            src={photo1}
            onMouseOver={(e) => (e.target.src = photo2)}
            onMouseOut={(e) => (e.target.src = photo1)}
          />
          <ProductName style={{ textDecoration: showHeart ? 'underline' : 'none' }}>{name}</ProductName>
          <ProductDescription>{description}</ProductDescription>
          <ProductPrice>
            <PriceDetails style={{ marginLeft: '-8px' }}>$</PriceDetails>
            {price}
            <PriceDetails>.00</PriceDetails>
          </ProductPrice>
          <div className="product-stars">stars</div>
          <MoreOptions>more options</MoreOptions>
        </Product>
      </MainProductContainer>
    );
  }
}

// ProductListEntry.propTypes = {
//   product.photo1: PropTypes.string.isRequired,
//   product.photo2: PropTypes.string.isRequired,
//   product.name: PropTypes.string.isRequired,
//   product.description: PropTypes.string.isRequired,
//   product.price: PropTypes.number.isRequired,
//   product.onLikeBagClick: PropTypes.func.isRequired,

// };

export default ProductListEntry;
