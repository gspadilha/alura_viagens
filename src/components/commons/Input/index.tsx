import React from 'react';
import { IBasicInput } from '../../../utils/props/input';

import { countries } from '../../../database/countries';

import { InputContainer, LabelContent, InputContent, InputError } from './styles';
import { IBasicChangeEvent } from '../../../utils/props/event';
import { IMaskTypes, Mask } from '../../../utils/masks';

interface IIinputProps extends IBasicInput {
  label: string;
  error?: string;
  withMask?: keyof typeof IMaskTypes;
  withDefaultList?: string;
}

const Input: React.FC<IIinputProps> = ({
  label,
  error,
  withMask,
  withDefaultList,
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
      {withDefaultList === 'paises' && (
        <datalist id={`${withDefaultList}Default`}>
          {countries.map(country => {
            return <option key={country.value} value={country.text} />;
          })}
        </datalist>
      )}

      <InputContainer>
        <LabelContent htmlFor={restProps.name}>{label}</LabelContent>
        <InputContent
          {...restProps}
          list={`${withDefaultList}Default`}
          onChange={onChangeInside}
        />
        <InputError>{error}</InputError>
      </InputContainer>
    </>
  );
};

export default Input;
