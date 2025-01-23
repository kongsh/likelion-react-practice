import '@/components/form-textarea.css';
import { useId, type ComponentProps } from 'react';

interface FormTextareaProps extends ComponentProps<'textarea'> {
  label: string;
  resize?: 'both' | 'vertical' | 'horizontal' | 'none';
}

function FormTextarea({
  label,
  rows = 6,
  cols = 40,
  resize = 'both',
  ...restProps
}: FormTextareaProps) {
  const inputId = useId();

  return (
    <div className="FormTextArea">
      <label htmlFor={inputId}>{label}</label>
      <textarea
        id={inputId}
        rows={rows}
        cols={cols}
        style={{ resize }}
        {...restProps}
      ></textarea>
    </div>
  );
}

export default FormTextarea;
