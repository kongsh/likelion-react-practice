import { ComponentProps } from 'react';

type ToggleButtonProps = ComponentProps<'button'> & {
  label: string;
  isOff?: boolean;
  onRender?: React.ReactElement;
  offRender?: React.ReactElement;
};

function ToggleButton({
  label,
  isOff = true,
  onRender,
  offRender,
  className = '',
  ...buttonProps
}: ToggleButtonProps) {
  const classes = `flex justify-center items-center size-6 bg-transparent rounded-md border-0 p-0 leading-none ${className}`;
  return (
    <button className={classes} {...buttonProps}>
      {isOff ? offRender : onRender}
      <span className="sr-only">{label}</span>
    </button>
  );
}

export default ToggleButton;
