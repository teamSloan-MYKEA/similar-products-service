import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartSolid } from '@fortawesome/free-solid-svg-icons';
import { MainProductContainer, Product, ProductName, ProductDescription, ProductPrice, PriceDetails, MoreOptions, Image, HeartContainer, HeartStyle } from './styles/ProductListEntryStyles';
import Bag from './Bag';

class ProductListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHeart: false,
      showBag: false,
      like: false,
    };
    this.onImageHover = this.onImageHover.bind(this);
    this.onHeartClick = this.onHeartClick.bind(this);
  }

  onImageHover() {
    const { like, showHeart, showBag } = this.state;
    if (like) {
      this.setState({
        showHeart: true,
      });
    } else {
      this.setState({
        showHeart: !showHeart,
        showBag: !showBag,
      });
    }
  }

  onHeartClick() {
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
    const { showHeart, showBag, like } = this.state;
    return (
      <MainProductContainer
        onMouseEnter={this.onImageHover} onMouseLeave={this.onImageHover}>
        <HeartContainer like={like} >
          {showHeart
            && (
              <FontAwesomeIcon
                icon={like ? heartSolid : heartRegular}
                onClick={this.onHeartClick}
                style={HeartStyle}
              />
            )}
        </HeartContainer>
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
          {showBag && <Bag />}
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
