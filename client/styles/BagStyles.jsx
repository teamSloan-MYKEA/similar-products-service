import React from 'react';
import styled, { keyframes } from 'styled-components';

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

export {
  BallAnimation,
  CheckAnimation,
  InnerBagContainer,
  BagContainer,
  BlueDot,
  OtherBlueDot,
  WhiteDot,
  CheckMark,
  ShoppingBag,
};
