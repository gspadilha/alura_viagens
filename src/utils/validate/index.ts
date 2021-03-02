import { cpf } from './general/cpf';
import { phone } from './general/phone';
import { email } from './general/email';
import { dateCompare, isOver18 } from './general/date';

export const Validate = {
  cpf,
  phone,
  email,
};

export const ValidateDate = {
  dateCompare,
  isOver18,
};
