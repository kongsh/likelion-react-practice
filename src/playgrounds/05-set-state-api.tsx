import { useState } from 'react';
import SignUpForm from './03-signup-form';
import SignInForm from './04-signin-form';

type View = 'signIn' | 'signUp';

function Playground() {
  // 상태 변수
  const [view, setView] = useState<View>('signIn');

  // 파생된 상태 변수
  const isSignInView = view.includes('signIn');

  // [핸들러] 상태 업데이트 함수
  const handleChangeView = () => {
    // const nextView = isSignInView ? 'signUp' : 'signIn';

    // 상태관리 API
    // set(nextState)
    // setView(isSignInView ? 'signUp' : 'signIn');

    // set((prevState) => nextState)
    setView((prevView) => {
      const nextView = prevView.includes('signIn') ? 'signUp' : 'signIn';
      return nextView;
    });
  };

  return (
    <div className="playground">
      <h1>플레이그라운드</h1>
      {isSignInView ? <SignInForm /> : <SignUpForm />}

      <hr />

      <button type="button" onClick={handleChangeView}>
        {isSignInView ? '회원가입' : '로그인'} 페이지로 이동
      </button>
    </div>
  );
}

export default Playground;
