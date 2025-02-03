import clsx from 'clsx/lite';
import S from './style.module.css';

function ActionButton({
  type = 'submit',
  className = '',
  ...buttonProps
}: React.ComponentProps<'button'>) {
  // 컴포넌트 스타일링을 위해 클래스 이름 병합
  const buttonStyles = clsx(S.actionButton, className);

  return <button type={type} className={buttonStyles} {...buttonProps} />;
}

export default ActionButton;
