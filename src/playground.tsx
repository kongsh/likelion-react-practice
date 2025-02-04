import { useState } from 'react';

import Nav from '@/homework/components/nav';
import HomeworkSignInForm from '@/homework/pages/sign-in';
import HomeworkSignUpForm from '@/homework/pages/sign-up';
import StateManagement from '@/homework/pages/state-management';
import { getUIView, type UIView } from '@/homework/lib/ui-view';

const getViewComponent = (uiView: UIView) => {
  let viewElement: React.ReactElement | null = null;
  switch (uiView) {
    case 'signin': {
      viewElement = <HomeworkSignInForm />;
      break;
    }
    case 'signup': {
      viewElement = <HomeworkSignUpForm />;
      break;
    }
    case 'state-management': {
      viewElement = <StateManagement />;
      break;
    }
  }
  return viewElement;
};

function Playground() {
  const [uiView] = useState<UIView>(getUIView);

  const viewElement = getViewComponent(uiView);

  return (
    <div className="Playground bg-euid-gray-200 wrapper">
      <h1>플레이그라운드</h1>
      <Nav />

      {viewElement}
    </div>
  );
}

export default Playground;
