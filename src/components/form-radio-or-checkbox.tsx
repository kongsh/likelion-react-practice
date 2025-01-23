import { useId, type ComponentProps } from 'react';

interface FormRadioProps extends ComponentProps<'input'> {
  label: string;
}

function FormRadioOrCheckbox({
  label,
  type = 'radio',
  ...restProps
}: FormRadioProps) {
  const inputId = useId();

  switch (type) {
    case 'radio':
    case 'checkbox':
      return (
        <div className="formRadioControl">
          <input id={inputId} type={type} {...restProps} />
          <label htmlFor={inputId}>{label}</label>
        </div>
      );
    default:
      return null;
  }
}

export default FormRadioOrCheckbox;
