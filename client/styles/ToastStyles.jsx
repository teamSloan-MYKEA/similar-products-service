import React from 'react';
import styled, { keyframes } from 'styled-components';

const ToastAnimation = keyframes`
  from {
    left: 100%;
  }
  to {
    left: 82%;
  }
`;

const ParentToastContainer = styled.div`
  position: absolute;
  top: 7vh;
  left: 82vw;
  z-index: 1;
  animation: ${ToastAnimation} 1s linear;
}
`;

const ToastContainer = styled.div`
  display: flex;
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
  font-family: 'Noto Sans';
`;

const ToastNotification = styled.div`
  color: white;
  background: black;
  font-size: 10px;
  padding: 15px 7px 15px 15px;
  width: 230px;
`;

const ToastExit = styled.button`
  color: white;
  background: black;
  font-size: 10px;
  border: 0;
  padding: 15px 15px 15px 7px;
`;

export {
  ToastAnimation,
  ParentToastContainer,
  ToastContainer,
  ToastNotification,
  ToastExit,
}