import React from 'react';
import { IBasicButton } from '../../../props/button';

import { ButtonContainer } from './styles';

interface IButtonProps extends IBasicButton {
  loading?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  loading,
  children,
  ...restProps
}) => {
  return (
    <ButtonContainer disabled={loading} {...restProps}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
