import { Outlet } from 'react-router';
import S from './style.module.css';

function AuthLayout() {
  return (
    <div className={S.layout}>
      <div className={S.main}>
        <Outlet />
      </div>
      <div className={S.AD}>PLACEHOLDER</div>
    </div>
  );
}

export default AuthLayout;
