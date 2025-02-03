import { useState } from 'react';

import Nav from '@/homework/components/nav';
import HomeworkSignInForm from '@/homework/pages/sign-in';
import HomeworkSignUpForm from '@/homework/pages/sign-up';
import StateManagement from '@/homework/pages/state-management';
import { getUIView, type UIView } from '@/homework/lib/ui-view';

function Playground() {
  const [uiView] = useState<UIView>(getUIView);

  let ViewComponent: React.ReactElement | null = null;

  switch (uiView) {
    case 'signin': {
      ViewComponent = <HomeworkSignInForm />;
      break;
    }
    case 'signup': {
      ViewComponent = <HomeworkSignUpForm />;
      break;
    }
    case 'state-management': {
      ViewComponent = <StateManagement />;
      break;
    }
  }

  return (
    <div className="Playground bg-euid-gray-200 wrapper">
      <h1>플레이그라운드</h1>
      <Nav />

      {ViewComponent}
    </div>
  );
}

export default Playground;
