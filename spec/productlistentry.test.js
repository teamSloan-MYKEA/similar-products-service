//expect heart to change on click from regular to filled
//expect name to be underlined on hover over product
//expect photo1 to change to photo2 on hover

import React from 'react';
import '../spec/setUpTests.js';
import { shallow, mount, render } from 'enzyme';
import ProductListEntry from '../client/ProductListEntry';

const testProduct = {
  id: 2,
  name: 'LIDHULT',
  description: 'Rocking Chair',
  price: 379,
  photo1: 'https://sdc-ikea-1.s3-us-west-1.amazonaws.com/bingsta-high-back-armchair__1.webp',
  photo2: 'https://sdc-ikea-1.s3-us-west-1.amazonaws.com/bingsta-high-back-armchair__2.webp',
};

describe('<ProductListEntry />', () => {

  it('renders first image url', () => {
    const wrapper = render(<ProductListEntry product={testProduct} />);
    const image = wrapper.find("img");
    expect(image.prop('src')).toEqual(testProduct.photo1);
  });

  ///////////////////////////
  //////////////////////////
  ///THIS ISNT WORKING//////
  //////////////////////////
  it('fills in the heart on like', () => {
    const wrapper = mount(<ProductListEntry product={testProduct} />);
    const showHeartState = wrapper.state('showHeart');
    expect(showHeartState).toBe(false);
    const spy = jest.spyOn(wrapper.instance(), 'onImageHover');
    const main = wrapper.getElement('.sc-AxjAm ').simulate('mouseEnter');
    // console.log(main.debug());
    expect(spy).toHaveBeenCalledTimes(1)
  })
});