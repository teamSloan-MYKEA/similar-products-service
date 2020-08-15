import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ToastAnimation, ParentToastContainer, ToastContainer, ToastNotification, ToastExit,
} from './styles/ToastStyles';

const Toast = (props) => {
  const { name, addTo } = props;
  return (
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
};

Toast.propTypes = {
  name: PropTypes.string.isRequired,
  addTo: PropTypes.string.isRequired,
};

export default Toast;
