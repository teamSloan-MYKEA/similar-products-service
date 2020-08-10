import React from 'react';
import ProductListEntry from './ProductListEntry';
import ProductList from './ProductList';

const axios = require('axios');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartSolid, faChevronCircleRight as rightArrow, faChevronCircleLeft as leftArrow } from '@fortawesome/free-solid-svg-icons';

class SimilarProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productsInView: [],
      index: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3001/photos/2')
      .then((similarProducts) => {
        this.setState({
          products: similarProducts.data,
          productsInView: similarProducts.data.slice(0, 4),
        });
      })
      .catch((err) => {
        throw err;
      });
  }

  handleClick() {
    const { productsInView, products } = this.state;
    if (this.state.index === 0) {
      this.setState({
        productsInView: this.state.products.slice(4, 8),
        index: 1,
      })
    } if (this.state.index === 1) {
      this.setState({
        productsInView: this.state.products.slice(8, 12),
        index: 2,
      })
    };
  }

  render() {
    const { productsInView } = this.state;
    return (
      <div>
        <ProductList productsInView={productsInView} onClick={this.handleClick} />
        <div className="scrollbar">Scrollbar</div>
      </div>
    );
  }
}

export default SimilarProducts;
