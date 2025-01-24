function SignUpForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 폼 데이터 생성
    const formData = new FormData(e.currentTarget);

    // 서버에 요청
    // Fetch()
    try {
      const response = await fetch('http://localhost:4000/api/signup', {
        method: 'POST',
        body: formData,
      });
      console.log(response);
    } catch (err) {
      console.error(err);
    }

    // 서버에서 응답

    // UI에 반영
  };

  return (
    <section style={{ marginInline: '48px' }}>
      <h2>회원 가입 폼 (POST 메서드)</h2>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit}
        // action="http://localhost:4000/api/signup"
        // method="post"
        // encType="multipart/form-data"
      >
        <div style={{ marginBlockEnd: 8 }}>
          <label htmlFor="usernameSignUp">이름</label>
          <input type="text" name="username" id="usernameSignUp" />
        </div>
        <div style={{ marginBlockEnd: 8 }}>
          <label htmlFor="useremailSignUp">이메일</label>
          <input type="email" name="useremail" id="useremailSignUp" />
        </div>
        <div style={{ marginBlockEnd: 8 }}>
          <label htmlFor="userpasswordSignUp">비밀번호</label>
          <input type="password" name="userpassword" id="userpasswordSignUp" />
        </div>
        <div style={{ marginBlockEnd: 8 }}>
          <label htmlFor="userprofileSignUp">프로필 이미지</label>
          <input
            type="file"
            name="userprofile"
            id="userprofileSignUp"
            accept=".jpg,.jpeg,.png,.svg,.webp"
          />
        </div>
        <button type="submit">회원 가입</button>
      </form>
    </section>
  );
}

export default SignUpForm;
