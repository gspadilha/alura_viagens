import { useEffect, useState } from 'react';
import { IBasicChangeEvent } from '../utils/props/event';
import { Validate } from '../utils/validation';

interface IUseFormularioIn {
  initialFormFields: Record<string, any>;
  validateOnlyOnSubmit: boolean;
  validate: (values: Record<string, any>) => Record<string, string> | undefined;
}

interface IUseFormularioOut {
  values: Record<string, any>;
  errors: Record<string, any>;
  touched: Record<string, any>;
  handleChange: (event: IBasicChangeEvent) => void;
  handleBlur: (event: IBasicChangeEvent) => void;
  handleSubmit: (values: Record<string, any>) => boolean;
  validate: (values: Record<string, any>) => Record<string, string> | undefined;
  validateOnlyOnSubmit: boolean;
}

const useFormulario = ({
  initialFormFields,
  validateOnlyOnSubmit,
  validate,
}: IUseFormularioIn): IUseFormularioOut => {
  const [values, setFormValues] = useState(initialFormFields);
  const [errors, setFormErrors] = useState(initialFormFields);
  const [touched, setTouchedFields] = useState(initialFormFields);

  let validateJustOnSubmit = validateOnlyOnSubmit;
  if (validateOnlyOnSubmit === undefined) {
    validateJustOnSubmit = true;
  }

  useEffect(() => {
    if (!validateJustOnSubmit) {
      validateValues(values);
    }
  }, [values]);

  const handleChange = (event: IBasicChangeEvent) => {
    const { name, value } = event.target;

    setFormValues({
      ...values,
      [name]: value,
    });
  };

  const handleBlur = (event: IBasicChangeEvent) => {
    const { name } = event.target;

    setTouchedFields({
      ...touched,
      [name]: true,
    });
  };

  const handleSubmit = (values: Record<string, any>): boolean => {
    const errorsFound = validate(values);
    if (errorsFound) {
      setFormErrors(errorsFound);
    }

    let isValidToSubmit = true;
    if (errorsFound) {
      Object.entries(errorsFound).forEach(([key, value]) => {
        if (Validate.isNotEmpty(value)) {
          isValidToSubmit = false;
        }
      });
    }
    return isValidToSubmit;
  };

  const validateValues = (values: Record<string, any>) => {
    const errorsFound = validate(values);
    if (errorsFound) {
      setFormErrors(errorsFound);
    }
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    validate,
    validateOnlyOnSubmit: validateJustOnSubmit,
  };
};

export default useFormulario;
