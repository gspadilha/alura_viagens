import React from 'react';
import { IBasicButton } from '../../../../utils/props/button';

import { OpcaoContainer } from './styles';

interface IOpcoesProps extends IBasicButton {
  icon: string;
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const Opcoes: React.FC<IOpcoesProps> = ({
  icon,
  label,
  isSelected,
  onClick,
}) => {
  return (
    <OpcaoContainer
      isSelected={isSelected}
      onClick={() => {
        onClick();
      }}
    >
      <img src={icon} alt={label} />
      {label}
    </OpcaoContainer>
  );
};

export default Opcoes;
