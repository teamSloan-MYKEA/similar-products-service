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
  left: 75vw;
  z-index: 1;
  animation: ${ToastAnimation} .6s ease-in-out;
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
  font-size: 12px;
  padding: 20px 7px 20px 20px;
  width: 300px;
  border: 1px solid black;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const ToastExit = styled.button`
  color: white;
  background: black;
  font-size: 10px;
  border: 0;
  padding: 20px 20px 20px 7px;
  outline: none;
  border: 1px solid black;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export {
  ToastAnimation,
  ParentToastContainer,
  ToastContainer,
  ToastNotification,
  ToastExit,
};
