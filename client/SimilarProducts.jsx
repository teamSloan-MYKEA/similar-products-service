/* eslint-disable no-undef */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight as rightArrow, faChevronCircleLeft as leftArrow } from '@fortawesome/free-solid-svg-icons';
import {
  MainContainer, TitleContainer, SimilarProductsTitle, SimilarProductsContainer, ArrowContainer,
} from './styles/SimilarProductsStyles';
import ProductList from './ProductList';
import Toast from './toast';
// import DummyData from '../database/dummyData';
const bagIcon = 'https://sdc-ikea-1.s3-us-west-1.amazonaws.com/shoppingBag.png';
const checkMark = 'https://sdc-ikea-1.s3-us-west-1.amazonaws.com/checkmark.png';

const axios = require('axios');

class SimilarProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    /* remember to switch this back to an empty array and change the axios call
      to get real data. server side routing has to be changed as well. */
      products: [],
      index: 0,
      showArrows: false,
      clickedName: '',
      addTo: '',
      showToast: false,
      BAG: bagIcon,
      CHECKMARK: checkMark,
    };

    this.timeOut = null;

    this.onClickRight = this.onClickRight.bind(this);
    this.onClickLeft = this.onClickLeft.bind(this);
    this.onHover = this.onHover.bind(this);
    this.onLikeBagClick = this.onLikeBagClick.bind(this);
    this.getData = this.getData.bind(this);
    // this.getDummyData = this.getDummyData.bind(this);
  }

  componentDidMount() {
    this.getData();
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
    const { showToast } = this.state;
    if (showToast) {
      setTimeout(() => {
        this.onLikeBagClick(name, addTo);
      }, 5100);
    } else {
      this.setState({
        clickedName: name,
        addTo,
        showToast: true,
      }, () => {
        this.timeOut = setTimeout(() => {
          this.setState({
            clickedName: '',
            addTo: '',
            showToast: false,
          });
        }, 5000);
      });
    }
  }

  getData() {
    axios.get(`similar${window.location.pathname}`)
      .then((similarProducts) => {
        this.setState({
          products: similarProducts.data,
        });
      })
      .catch((err) => {
        throw err;
      });
  }

  // getDummyData() {
  //   axios.get('/')
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       throw err;
  //     });
  // }

  render() {
    const {
      products, index, clickedName, addTo, showArrows, showToast,
    } = this.state;
    return (
      <MainContainer>
        {showToast && <Toast name={clickedName} addTo={addTo} showToast={showToast} />}
        <TitleContainer>
          <SimilarProductsTitle>
            Similar products
          </SimilarProductsTitle>
        </TitleContainer>
        <SimilarProductsContainer onMouseEnter={this.onHover} onMouseLeave={this.onHover}>
          <ArrowContainer style={{width: '35px'}}>
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
            BAG={this.state.BAG}
            CHECKMARK={this.state.CHECKMARK}
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
      </MainContainer>
    );
  }
}

export default SimilarProducts;
