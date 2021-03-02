import { cpf } from './general/cpf';
import { stru } from './general/stru';
import { strl } from './general/strl';
import { phone } from './general/phone';

export enum IMaskTypes {
  cpf = 'cpf',
  stru = 'stru',
  strl = 'strl',
  phone = 'phone',
}

export const Mask = {
  cpf,
  stru,
  strl,
  phone,
};
