import React from 'react';
import { IBasicInput } from '../../../props/input';

import { countries } from '../../../database/countries';

import { InputContainer, LabelContent, InputContent } from './styles';
import { IBasicChangeEvent } from '../../../props/event';
import { IMaskTypes, Mask } from '../../../utils/masks';

interface IIinputProps extends IBasicInput {
  label: string;
  classe?: string;
  withMask?: keyof typeof IMaskTypes;
}

const Input: React.FC<IIinputProps> = ({
  label,
  classe,
  withMask,
  onChange,
  ...restProps
}) => {
  const onChangeInside = (event: IBasicChangeEvent) => {
    if (withMask !== undefined) {
      event.target.value = Mask[withMask](event.target.value);
    }

    if (onChange) onChange(event);
  };

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
        <InputContent
          {...restProps}
          list={`${classe}Default`}
          onChange={onChangeInside}
        />
      </InputContainer>
    </>
  );
};

export default Input;
