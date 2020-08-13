import React from 'react';
import styled, { keyframes } from 'styled-components';

const ToastAnimation = keyframes`
  from {
    top: 7vh;
    left: 100vw;
  }
  to {
    top: 7vh;
    left: 82vw;
  }
`;

const ParentToastContainer = styled.div`
  position: absolute;
  top: 7vh;
  left: 82vw;
  z-index: 1;
  animation: ${ToastAnimation} 1s;
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

class Toast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toast: false,
      name: '',
    };
    // this.onBagLikeClick = this.onBagLikeClick.bind(this);
  }

  render() {
    const { name } = this.props;
    return (
      <ParentToastContainer>
        {name && (
          <ToastContainer>
            <ToastNotification data-testid="toast-name">
              <strong>{name}</strong>
              {' '}
              was saved to the Shopping list.
            </ToastNotification>
            <ToastExit>
              <strong>View</strong>
            </ToastExit>
          </ToastContainer>
        )}
      </ParentToastContainer>
    );
  }
}

export default Toast;
