/* eslint-disable no-return-assign */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartSolid } from '@fortawesome/free-solid-svg-icons';
import {
  MainProductContainer, Product, ProductName, ProductDescription,
  ProductPrice, PriceDetails, MoreOptions, Image, HeartContainer, HeartStyle, BagContainer,
} from './styles/ProductListEntryStyles';
import Bag from './Bag';
import StarBar from './StarBar';

class ProductListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHeart: false,
      showBag: false,
      like: false,
      addToBag: false,
      hover: false,
    };

    this.onHeartClick = this.onHeartClick.bind(this);
    this.onBagClick = this.onBagClick.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
  }

  onMouseEnter() {
    const {
      like, showHeart, showBag, addToBag,
    } = this.state;
    this.setState({
      hover: true,
      showBag: true,
      showHeart: true || like,
    });
  }

  onMouseLeave() {
    const {
      like, hover, showHeart, showBag, addToBag
    } = this.state;
    this.setState({
      hover: false,
      showHeart: false || like,
      showBag: this.state.addToBag,
    });
  }

  onHeartClick() {
    const { like } = this.state;
    const { onLikeBagClick, product } = this.props;
    const { name } = product;
    this.setState({
      like: true,
      showHeart: true,
    });
    onLikeBagClick(name, 'like');
  }

  onBagClick() {
    const { onLikeBagClick, product } = this.props;
    const { name } = product;
    this.setState({
      addToBag: true,
    });
    setTimeout(() => {
      this.setState({
        addToBag: false,
        showBag: false,
      });
    }, 2000);

    onLikeBagClick(name, 'bag');
  }

  render() {
    const { product } = this.props;
    const {
      photo1, photo2, name, description, price, stars,
    } = product;
    const { showHeart, showBag, like } = this.state;
    return (
      <div onMouseEnter={this.onMouseEnter}
      onMouseLeave={this.onMouseLeave}>
        <HeartContainer like={like}>
          {showHeart
            && (
              <FontAwesomeIcon
                icon={like ? heartSolid : heartRegular}
                onClick={this.onHeartClick}
                style={HeartStyle}
              />
            )}
        </HeartContainer>
      <MainProductContainer>

        <Product>
          <Image
            src={photo1}
            onMouseOver={(e) => (e.target.src = photo2)}
            onMouseOut={(e) => (e.target.src = photo1)}
          />
          <div style={{marginTop: '30px'}}>
            <ProductName style={{ textDecoration: showHeart ? 'underline' : 'none' }}>{name}</ProductName>
            <ProductDescription>{description}</ProductDescription>
            <ProductPrice>
              <PriceDetails style={{ marginLeft: '-8px' }}>$</PriceDetails>
              {price}
              <PriceDetails>.00</PriceDetails>
            </ProductPrice>
            {/* <div className="product-stars">stars</div> */}
            <StarBar score={stars} />
            <MoreOptions>More options</MoreOptions>
            <BagContainer onClick={this.onBagClick}>
              {showBag && <Bag BAG={this.props.BAG}
                CHECKMARK={this.props.CHECKMARK} />}
            </BagContainer>
          </div>
        </Product>
      </MainProductContainer>
      </div>
    );
  }
}

ProductListEntry.propTypes = {
  onLikeBagClick: PropTypes.func.isRequired,
  product: PropTypes.instanceOf(Object).isRequired,
};

export default ProductListEntry;
