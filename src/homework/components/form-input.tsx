import S from './form-input.module.css';
import { ComponentProps, useId } from 'react';

function FormInput({
  label,
  ...inputProps
}: ComponentProps<'input'> & { label: string }) {
  const id = useId();

  return (
    <div className={S.formInput}>
      <label className={S.formInputLabel} htmlFor={id}>
        {label}
      </label>
      <input id={id} {...inputProps} />
    </div>
  );
}

export default FormInput;
