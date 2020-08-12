import React from 'react';
import styled from 'styled-components';

const ParentToastContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 1000px;
`;

const ToastContainer = styled.div`
  display: flex;
  transition: transform .6s ease-in-out;
  animation: toast-in-right .7s;
`;

const ToastNotification = styled.div`
`;

const ToastExit = styled.button`
`;

class Toast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toast: false,
      name: '',
    };
    this.onBagLikeClick = this.onBagLikeClick.bind(this);
  }

  onBagLikeClick(name) {
    console.log(name);
  }

  render() {
    const { name } = this.props;
    return (
      <ParentToastContainer>
        {name && (
        <ToastContainer>
          <ToastNotification>
            {name}
            {' '}
            is adding to the Shopping Cart.
          </ToastNotification>
          <ToastExit>
            VIEW
          </ToastExit>
        </ToastContainer>
        )}
      </ParentToastContainer>
    );
  }
}

export default Toast;
