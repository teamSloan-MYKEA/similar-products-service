import React from 'react';
import styled, { keyframes } from 'styled-components';
import shoppingBag from './images/shoppingBag.png';
import checkMark from './images/checkMark.png';

const BallAnimation = keyframes`
  0% {
    top: 30%;
  }
  60% {
    top: 60%;
  }
  100% {
    top: 30%;
  }
`;

const CheckAnimation = keyframes`
  0% {
    top: 60%;
  }
  100% {
    top: 35%;
  }
`;

const InnerBagContainer = styled.div`
  position: absolute;
`;
const BagContainer = styled.div`
  width: 100%;
  position: relative;
`;

const BlueDot = styled.div`
  position: absolute;
  top: 17%;
  left: 7%;
  width: 40px;
  height: 40px;
  background: rgb(0, 88, 163);
  border-radius: 50%;
  z-index: 0;
`;
const OtherBlueDot = styled.div`
  position: absolute;
  top: 17%;
  left: 7%;
  width: 40px;
  height: 40px;
  background: rgb(0, 88, 163);
  border-radius: 50%;
  z-index: 1;
`;

const WhiteDot = styled.div`
  position: relative;
  width: 6px;
  height: 6px;
  z-index: 1;
  background: white;
  border-radius: 50%;
  top: 30%;
  left: 43%;
  animation: ${BallAnimation} .3s linear;
  animation-fill-mode: forwards;
`;

const CheckMark = styled.img`
  max-width: 30%;
  position: relative;
  top: 35%;
  left: 37%;
  z-index: 1;
  background: rgb(0, 88, 163);
  transform: rotate(10deg);
  animation: ${CheckAnimation} .2s linear;
  animation-fill-mode: forwards;
`;

const ShoppingBag = styled.img`
  z-index: 1;
  position: relative;
  max-width: 40%;
`;

// on bag click the shopping bag icon z-index turns -1
// show blue dot
// run animation to see white ball bounce
// turn shopping bag z index to 0, blue for z index -1, check mark zindex to 1
// animate check mark

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
        <ShoppingBag src={shoppingBag} style={{maxWidth: '46px'}} onClick={this.onClickBag} />
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
