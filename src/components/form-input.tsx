import { useId, type ComponentProps } from 'react';

interface FormInputProps extends ComponentProps<'input'> {
  label: string;
}

function FormInput({ label, ...restProps }: FormInputProps) {
  const inputId = useId();

  return (
    <div className="formControl">
      <label htmlFor={inputId}>{label}</label>
      <input id={inputId} {...restProps} />
    </div>
  );
}

export default FormInput;
