import React from 'react';
import ProductListEntry from './ProductListEntry';
import ProductList from './ProductList';

const axios = require('axios');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartSolid, faChevronCircleRight as rightArrow, faChevronCircleLeft as leftArrow } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const MainContainer = styled.div`

`;

const SimilarProductsContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 450px;
  // background-color: green;
`;

class SimilarProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productsInView: [],
      index: 0,
      showRightArrow: true,
      showLeftArrow: true,
      showHeart: false,
    };

    this.onClickRight = this.onClickRight.bind(this);
    this.onClickLeft = this.onClickLeft.bind(this);
    // this.toggleArrows = this.toggleArrows.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3001/photos/2')
      .then((similarProducts) => {
        this.setState({
          products: similarProducts.data,
          productsInView: similarProducts.data.slice(0, 4),
          showRightArrow: true,
        });
      })
      .catch((err) => {
        throw err;
      });
  }

  onClickRight() {
    const { products, index } = this.state;
    const newIndex = index + 4;
    console.log(index)
    if (index <= 4) {
      this.setState({
        productsInView: products.slice(newIndex, newIndex + 4),
        index: newIndex,
      });
    }
  }

  onClickLeft() {
    const { products, index } = this.state;
    const newIndex = index - 4;
    console.log(index)
    if (index >= 4) {
      this.setState({
        productsInView: products.slice(newIndex, newIndex + 4),
        index: newIndex,
      });
    }
  }

  toggleArrows() {
    const { index } = this.state;
  }

  render() {
    const { productsInView, products, index, showLeftArrow, showRightArrow } = this.state;
    return (
      <MainContainer>
        <h1>Similar Products</h1>
        <SimilarProductsContainer>
          {showLeftArrow && <FontAwesomeIcon icon={leftArrow} onClick={this.onClickLeft} style={{position: 'relative', top: '50%', margin: '2px'}}/>}
          <ProductList index={index} products={products} />
          {showRightArrow && <FontAwesomeIcon icon={rightArrow} onClick={this.onClickRight} style={{position: 'relative', top: '50%', margin: '2px'}}/>}
        </SimilarProductsContainer>
          <div className="scrollbar">Scrollbar</div>
      </MainContainer>
    );
  }
}

export default SimilarProducts;
