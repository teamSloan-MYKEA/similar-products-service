/* eslint-disable no-undef */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight as rightArrow, faChevronCircleLeft as leftArrow } from '@fortawesome/free-solid-svg-icons';
import {
  MainContainer, TitleContainer, SimilarProductsTitle, SimilarProductsContainer, ArrowContainer,
} from './styles/SimilarProductsStyles';
import ProductList from './ProductList';
import Toast from './toast';
import DummyData from '../database/dummyData';

const axios = require('axios');

class SimilarProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    /* remember to switch this back to an empty array and change the axios call
      to get real data. server side routing has to be changed as well. */
      products: DummyData,
      index: 0,
      showArrows: false,
      clickedName: '',
      addTo: '',
    };

    this.onClickRight = this.onClickRight.bind(this);
    this.onClickLeft = this.onClickLeft.bind(this);
    this.onHover = this.onHover.bind(this);
    this.onLikeBagClick = this.onLikeBagClick.bind(this);
    this.getData = this.getData.bind(this);
    this.getDummyData = this.getDummyData.bind(this);
  }

  componentDidMount() {
    this.getDummyData();
  }

  onClickRight() {
    const { index } = this.state;
    const newIndex = index + 4;
    if (index <= 4) {
      this.setState({
        index: newIndex,
      });
    }
  }

  onClickLeft() {
    const { index } = this.state;
    const newIndex = index - 4;
    if (index >= 4) {
      this.setState({
        index: newIndex,
      });
    }
  }

  onHover() {
    const { showArrows } = this.state;
    this.setState({
      showArrows: !showArrows,
    });
  }

  onLikeBagClick(name, addTo) {
    // maybe this takes a callback in order to complete
    // const counter = 0;
    // if (somestate) {
    //   setTime 5001
    // }
    if (addTo === 'like') {
      this.setState({
        clickedName: name,
        addTo: 'was saved to the Shopping list.',
      });
    } if (addTo === 'bag') {
      this.setState({
        clickedName: name,
        addTo: 'was added to your shopping bag.',
      });
    }
    setTimeout(() => {
      this.setState({
        clickedName: '',
      });
    }, 5000);
  }

  getData() {
    axios.get(`photos${window.location.pathname}`)
      .then((similarProducts) => {
        this.setState({
          products: similarProducts.data,
          // productsInView: similarProducts.data.slice(0, 4),
        });
      })
      .catch((err) => {
        throw err;
      });
  }

  getDummyData() {
    axios.get('/')
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {
    const {
      products, index, clickedName, addTo, showArrows,
    } = this.state;
    return (
      <MainContainer>
        <Toast name={clickedName} addTo={addTo} />
        <TitleContainer>
          <SimilarProductsTitle>
            Similar products
          </SimilarProductsTitle>
        </TitleContainer>
        <SimilarProductsContainer onMouseEnter={this.onHover} onMouseLeave={this.onHover}>
          <ArrowContainer>
            {showArrows
            && (
            <FontAwesomeIcon
              icon={leftArrow}
              onClick={this.onClickLeft}
              style={{
                position: 'relative',
                top: '50%',
                transform: 'scale(3)',
                zIndex: 1,
                visibility: (index >= 4) ? 'visible' : 'hidden',
              }}
            />
            )}
          </ArrowContainer>
          <ProductList
            index={index}
            products={products}
            onLikeBagClick={this.onLikeBagClick}
          />
          <ArrowContainer>
            {showArrows
            && (
              <FontAwesomeIcon
                icon={rightArrow}
                onClick={this.onClickRight}
                style={{
                  position: 'relative',
                  top: '50%',
                  transform: 'scale(3)',
                  zIndex: 1,
                  visibility: (index <= 4) ? 'visible' : 'hidden',
                }}
              />
            )}
          </ArrowContainer>
        </SimilarProductsContainer>
        <div className="scrollbar">Scrollbar</div>
      </MainContainer>
    );
  }
}

export default SimilarProducts;
