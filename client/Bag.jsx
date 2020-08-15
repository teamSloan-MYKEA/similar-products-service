import React from 'react';
import shoppingBag from './images/shoppingBag.png';
import checkMark from './images/checkmark.png';
import {
  InnerBagContainer, BagContainer, BlueDot, OtherBlueDot, WhiteDot, CheckMark, ShoppingBag,
} from './styles/BagStyles';

class Bag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showWhiteDot: false,
      showCheckMark: false,
    };
    this.onClickBag = this.onClickBag.bind(this);
  }

  onClickBag(e) {
    e.target.style.visibility = 'hidden';
    this.setState({
      showWhiteDot: true,
    });
    setTimeout(() => {
      this.setState({
        showWhiteDot: false,
        showCheckMark: true,
      });
    }, 301);
  }

  render() {
    const { showWhiteDot, showCheckMark } = this.state;
    return (
      <BagContainer>
        <InnerBagContainer>
          <ShoppingBag src={shoppingBag} style={{ maxWidth: '46px' }} onClick={this.onClickBag} />
          <BlueDot>
            {showWhiteDot && <WhiteDot />}
          </BlueDot>
          {showCheckMark && (
          <OtherBlueDot>
            <CheckMark src={checkMark} />
          </OtherBlueDot>
          )}
        </InnerBagContainer>
      </BagContainer>
    );
  }
}

export default Bag;
