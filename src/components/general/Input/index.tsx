import React from 'react';
import { IBasicInput } from '../../../props/input';

import { countries } from '../../../database/countries';

import { InputContainer, LabelContent, InputContent } from './styles';

interface IIinputProps extends IBasicInput {
  label: string;
  classe?: string;
}

const Input: React.FC<IIinputProps> = ({ label, classe, ...restProps }) => {
  return (
    <>
      {classe === 'paises' && (
        <datalist id="paisesDefault">
          {countries.map(country => {
            return <option key={country.value} value={country.text} />;
          })}
        </datalist>
      )}

      <InputContainer>
        <LabelContent htmlFor={restProps.name}>{label}</LabelContent>
        <InputContent {...restProps} list={`${classe}Default`} />
      </InputContainer>
    </>
  );
};

export default Input;
