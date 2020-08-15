import React from 'react';
import PropTypes from 'prop-types';
import {
  ParentToastContainer, ToastContainer, ToastNotification, ToastExit,
} from './styles/ToastStyles';

const Toast = ({ name, addTo }) => (
  <ParentToastContainer>
    {name && (
      <ToastContainer>
        <ToastNotification data-testid="toast-name">
          <strong>{name}</strong>
          {' '}
          {addTo}
        </ToastNotification>
        <ToastExit>
          <strong>View</strong>
        </ToastExit>
      </ToastContainer>
    )}
  </ParentToastContainer>
);

Toast.propTypes = {
  name: PropTypes.string.isRequired,
  addTo: PropTypes.string.isRequired,
};

export default Toast;
