import S from './form-input.module.css';
import { ComponentProps, useId, useState } from 'react';
import { IconEyeOff, IconEyeOn } from './icon-eye';
import ToggleButton from './toggle-button';

type FormInputProps = ComponentProps<'input'> & {
  label: string;
  hasToggleButton?: boolean;
};

function FormInput({
  label,
  hasToggleButton = false,
  type = 'text',
  ...inputProps
}: FormInputProps) {
  const id = useId();

  const [isOff, setIsOff] = useState(true);
  const handleToggle = () => {
    setIsOff((isOff) => !isOff);
  };

  if (type === 'password' && !isOff) {
    type = 'text';
  }

  const buttonLabel = `패스워드 ${isOff ? '표시' : '감춤'}`;

  return (
    <div className={S.formInput}>
      <label className={S.formInputLabel} htmlFor={id}>
        {label}
      </label>
      <div className={S.group}>
        <input id={id} type={type} {...inputProps} />
        {hasToggleButton && (
          <ToggleButton
            label={buttonLabel}
            title={buttonLabel}
            offRender={<IconEyeOff />}
            onRender={<IconEyeOn />}
            isOff={isOff}
            onClick={handleToggle}
          />
        )}
      </div>
    </div>
  );
}

export default FormInput;
