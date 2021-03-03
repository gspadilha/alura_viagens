import { cpf } from './general/cpf';
import { phone } from './general/phone';
import { email } from './general/email';
import { dateCompare, isOver18 } from './general/date';

const isEmptyTest = (value: any): boolean =>
  value === undefined || value === null || String(value).trim().length === 0;

export const Validate = {
  cpf,
  phone,
  email,
  isEmpty: (value: any) => isEmptyTest(value),
  isNotEmpty: (value: any) => !isEmptyTest(value),
};

export const ValidateDate = {
  dateCompare,
  isOver18,
};
