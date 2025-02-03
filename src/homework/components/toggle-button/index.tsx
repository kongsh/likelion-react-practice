// import clsx from 'clsx/lite';
import { twMerge } from 'tailwind-merge';

type ToggleButtonProps = React.ComponentProps<'button'> & {
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
  // const buttonStyles = clsx(
  //   `flex justify-center items-center
  //    size-8 rounded-md border-0 px-0 py-0 p-5 bg-transparent
  //    leading-none hover:not-[:disabled,[aria-disabled=true]]:bg-black/10`,
  //   className
  // );

  // console.log('clsx()', buttonStyles);

  const buttonStyles = twMerge(
    `flex justify-center items-center 
     size-8 rounded-md border-0 px-0 py-0 p-5 bg-transparent
     leading-none hover:not-[:disabled,[aria-disabled=true]]:bg-black/10`,
    className
  );

  return (
    <button className={buttonStyles} {...buttonProps}>
      {isOff ? offRender : onRender}
      <span className="sr-only">{label}</span>
    </button>
  );
}

export default ToggleButton;
