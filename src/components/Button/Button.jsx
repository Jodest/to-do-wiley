import React from 'react';

import ButtonUI from '@material-ui/core/Button';

const Button = ({
  type,
  disabled,
  onClick,
  className,
  title,
}) => (
  <ButtonUI
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={className ? `button ${className}` : 'button'}
  >
    {title}
  </ButtonUI>
);

export default Button;
