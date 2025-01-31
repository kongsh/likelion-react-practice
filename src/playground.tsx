import { useState } from 'react';
import Nav from './homework/components/nav';
import HomeworkSignIn from './homework/pages/sign-in';
import HomeworkSignUp from './homework/pages/sign-up';

type UIView = 'signin' | 'signup';

const getUIView = (): UIView => {
  const searchParams = new URLSearchParams(location.search);
  const view = searchParams.get('view') ?? 'signin';

  return view as UIView;
};

function Playground() {
  const [uiView] = useState<UIView>(getUIView);

  const isSignInView = uiView.includes('signin');

  return (
    <div className="playground">
      <h1>플레이그라운드</h1>
      <Nav />
      {isSignInView ? <HomeworkSignIn /> : <HomeworkSignUp />}
    </div>
  );
}

export default Playground;
