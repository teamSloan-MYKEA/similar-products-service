import React from 'react';
import shoppingBag from './images/shoppingBag.png';
import checkMark from './images/checkMark.png';
import {
  BallAnimation, CheckAnimation, InnerBagContainer, BagContainer, BlueDot, OtherBlueDot, WhiteDot, CheckMark, ShoppingBag,
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
    return (
      <BagContainer>
        <InnerBagContainer>
          <ShoppingBag src={shoppingBag} style={{ maxWidth: '46px' }} onClick={this.onClickBag} />
          <BlueDot>
            {this.state.showWhiteDot && <WhiteDot />}
          </BlueDot>
          {this.state.showCheckMark && (
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
