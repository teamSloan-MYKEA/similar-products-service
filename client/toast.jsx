import React from 'react';
import styled from 'styled-components';

const ToastContainer = styled.div`
  position: absolute;
  display: flex,
  top: 12px;
  right: 12px;
  transition: transform .6s ease-in-out;
  animation: toast-in-right .7s;
`;

const ToastNotification = styled.div`
`;

const ToastExit = styled.button`
`

const Toast = (props) => {
  return (
    <ToastContainer>
      <ToastNotification>
        {props.name} is adding to the Shopping Cart.
      </ToastNotification>
      <ToastExit>
        VIEW
      </ToastExit>
    </ToastContainer>
  )
}

export default Toast;