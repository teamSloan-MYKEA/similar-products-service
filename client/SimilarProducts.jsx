import React from 'react';
import ProductListEntry from './ProductListEntry';

const axios = require('axios');
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart as heartRegular } from '@fortawesome/free-regular-svg-icons';
// import { faHeart as heartSolid, faChevronCircleRight as rightArrow, faChevronCircleLeft as leftArrow } from '@fortawesome/free-solid-svg-icons';

class SimilarProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/photos/1')
      .then((similarProducts) => {
        this.setState({
          products: similarProducts.data,
        });
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <h1>Similar Products</h1>
        <div className="products-container" style={{ display: 'flex' }}>
          {products.map((product) => <ProductListEntry product={product} />)}
        </div>
        <div className="scrollbar">Scrollbar</div>
      </div>
    );
  }
}

export default SimilarProducts;
