import React from 'react';
import {
  ToastAnimation, ParentToastContainer, ToastContainer, ToastNotification, ToastExit
} from './styles/ToastStyles';

class Toast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toast: false,
      name: '',
      // like: false,
    };
    // this.onBagLikeClick = this.onBagLikeClick.bind(this);
  }

  render() {
    const { name, addTo } = this.props;
    return (
      <ParentToastContainer>
        {name && (
          <ToastContainer>
            <ToastNotification data-testid="toast-name">
              <strong>{name}</strong>
              {' '}
              {addTo}
              {/*was added to your shopping bag*/}
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
