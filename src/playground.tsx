import SignUpForm from './playgrounds/03-signup-form';
import SignInForm from './playgrounds/04-signin-form';

function Playground() {
  return (
    <div className="playground">
      <h1>플레이그라운드</h1>
      <SignUpForm></SignUpForm>
      <SignInForm></SignInForm>
    </div>
  );
}

export default Playground;
