import FormInput from '../components/form-input';

function HomeworkSignUp() {
  return (
    <section>
      <h3 className="sr-only">회원가입 폼</h3>
      <form>
        <FormInput label="이름" name="username" placeholder="2글자 이상" />
        <FormInput
          type="email"
          label="이메일"
          name="useremail"
          placeholder="user@company.io"
        />
      </form>
    </section>
  );
}

export default HomeworkSignUp;
