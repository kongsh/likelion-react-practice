import { useId, type ComponentProps } from 'react';
import FormRadioOrCheckbox from './form-radio-or-checkbox';

interface FormInputProps extends ComponentProps<'input'> {
  label: string;
}

function FormInput({ label, type, ...restProps }: FormInputProps) {
  const inputId = useId();

  if (type === 'radio' || type === 'checkbox') {
    return (
      <FormRadioOrCheckbox
        label={label}
        type={type}
        {...restProps}
      ></FormRadioOrCheckbox>
    );
  }

  return (
    <div className="formControl">
      <label htmlFor={inputId}>{label}</label>
      <input id={inputId} type={type} {...restProps} />
    </div>
  );
}

export default FormInput;
