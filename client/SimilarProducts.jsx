import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart as heartRegular } from '@fortawesome/free-regular-svg-icons';
// import { faHeart as heartSolid, faChevronCircleRight as rightArrow, faChevronCircleLeft as leftArrow } from '@fortawesome/free-solid-svg-icons';
import ProductListEntry from './ProductListEntry';

class SimilarProducts extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     something: '',
  //   },
  // };

  render() {
    return(
    <div>
      <h1>Similar Products</h1>
      <div className="products-container">
        <ProductListEntry />
        <ProductListEntry />
        <ProductListEntry />
        <ProductListEntry />
      </div>
      <div className="scrollbar">Scrollbar</div>
    </div>
    )
  }
}

export default SimilarProducts;
