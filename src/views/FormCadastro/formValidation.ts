import { Validate, ValidateDate } from '../../utils/validation';

const formValidation = (values: Record<string, any>) => {
  const errors: Record<string, string> = {};

  Object.entries(values).forEach(([key, value]) => {
    if (Validate.isEmpty(value)) {
      errors[key] = 'Campo Obrigatório';
    }
  });

  if (
    Validate.isEmpty(errors.dataSaida) &&
    Validate.isEmpty(errors.dataRetorno)
  ) {
    if (ValidateDate.dateCompare(values.dataSaida, values.dataRetorno) === -1) {
      errors.dataRetorno =
        'Data de retorno deve ser posterior a Data de saída!';
    }
  }

  if (
    Validate.isEmpty(errors.dataNascimento) &&
    !ValidateDate.isOver18(values.dataNascimento)
  ) {
    errors.dataNascimento = 'Usuário deve ser maior de idade!';
  }

  if (Validate.isEmpty(errors.cpf) && !Validate.cpf(values.cpf)) {
    errors.cpf = 'CPF Inválido!';
  }

  if (Validate.isEmpty(errors.email) && !Validate.email(values.email)) {
    errors.email = 'Email Inválido!';
  }

  if (Validate.isEmpty(errors.telefone) && !Validate.phone(values.telefone)) {
    errors.telefone = 'Telefone Inválido!';
  }

  return errors;
};

export default formValidation;
