import { useState } from 'react';
import { getUIView, type UIView } from '@/homework/lib/ui-view';
import './style.css';
import clsx from 'clsx/lite';

// console.log(clsx('a', 'b', true && 'c'));
// console.log(clsx('a', 'b', false && 'c'));

function Nav() {
  const [uiView] = useState<UIView>(getUIView);

  switch (uiView) {
    case 'signin':
      break;
    case 'signup':
      break;
    case 'state-management':
      break;
  }

  const isSignInView = uiView.includes('signin');
  const isSignUpView = uiView.includes('signup');
  const isStateManagementView = uiView.includes('state-management');

  return (
    <nav className="nav">
      <h2 className="sr-only">페이지 탐색</h2>
      <a
        href="/?view=signin"
        // className={isSignInView ? 'active' : undefined}
        className={clsx(isSignInView && 'active')}
        aria-current={isSignInView ? 'page' : undefined}
      >
        로그인
      </a>
      <a
        href="/?view=signup"
        // className={!isSignInView ? 'active' : undefined}
        className={clsx(isSignUpView && 'active')}
        aria-current={isSignUpView ? 'page' : undefined}
      >
        회원가입
      </a>
      <a
        href="/?view=state-management"
        // className={!isSignInView ? 'active' : undefined}
        className={clsx(isStateManagementView && 'active')}
        aria-current={isStateManagementView ? 'page' : undefined}
      >
        상태 관리 전략
      </a>
    </nav>
  );
}

export default Nav;
