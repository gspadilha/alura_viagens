import React from 'react';
import { ButtonContainer } from './styles';
import { IBasicButton } from '../../../utils/props/button';

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
