import { useId } from 'react';

interface FormInputProps {
  type?:
    | 'text'
    | 'password'
    | 'number'
    | 'email'
    | 'search'
    | 'color'
    | 'range';
  id?: string;
  label: string;
  placeholder?: string;
  value?: number | string;
  defaultValue?: number | string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [property: string | number]: unknown;
}

function FormInput({
  type = 'text',
  id,
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  ...restProps
}: FormInputProps) {
  const inputId = useId();

  return (
    <div className="formControl">
      <label htmlFor={id ?? inputId}>{label}</label>
      <input
        type={type}
        id={id ?? inputId}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        {...restProps}
      />
    </div>
  );
}

export default FormInput;
