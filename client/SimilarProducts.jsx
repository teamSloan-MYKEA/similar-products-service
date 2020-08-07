import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartSolid, faChevronCircleRight as rightArrow, faChevronCircleLeft as leftArrow } from '@fortawesome/free-solid-svg-icons';


const SimilarProducts = () => (
  <div>
    <FontAwesomeIcon icon={heartRegular} />
    <FontAwesomeIcon icon={heartSolid} />
    <FontAwesomeIcon icon={rightArrow} />
    <FontAwesomeIcon icon={leftArrow} />
  </div>
);

// stateless component
export default SimilarProducts;
