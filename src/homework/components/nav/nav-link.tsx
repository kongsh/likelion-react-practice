import { tm } from '@/utils/tw-merge';

type NavLinkProps = React.ComponentProps<'a'> & {
  isActive?: boolean;
  activeClassName?: string;
};

function NavLink({
  href,
  children,
  isActive,
  activeClassName = 'active',
  className,
  ...restProps
}: NavLinkProps) {
  return (
    <a
      href={`/?view=${href}`}
      className={tm(isActive && activeClassName, className)}
      aria-current={isActive ? 'page' : undefined}
      {...restProps}
    >
      {children}
    </a>
  );
}

export default NavLink;
