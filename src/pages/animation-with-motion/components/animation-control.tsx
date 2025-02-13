import { useId, useState } from 'react';

type AnimationControlProps = React.ComponentProps<'input'> & {
  label: string;
  onUpdate?: (value: number | string) => void;
};

function AnimationControl({
  label,
  onUpdate,
  ...inputProps
}: AnimationControlProps) {
  const id = useId();

  const [value, setValue] = useState(inputProps.value ?? 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setValue(value);
    onUpdate?.(value);
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="range"
        id={id}
        value={value}
        onChange={handleChange}
        {...inputProps}
      />
      <output>{value}</output>
    </div>
  );
}

export default AnimationControl;
