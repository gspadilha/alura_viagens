import { testarCPF } from './validate/cpf';

export const Validate = (typeTest: string, valueTest: any) => {
  if (typeTest === 'cpf') {
    return testarCPF(valueTest);
  }
};
