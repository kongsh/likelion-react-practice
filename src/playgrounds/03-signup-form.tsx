import { useState } from 'react';

const ENDPOINT = 'http://localhost:4000/api/signup';

const createRequestOption = (formData: FormData) => ({
  method: 'POST',
  body: formData,
});

interface ResponseDataType {
  id: string;
  name: string;
  email: string;
  profileImage: string;
  message?: string;
}

function SignUpForm() {
  const [responseData, setResponseData] = useState<null | ResponseDataType>(
    null
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSubmitProsise = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 폼 데이터 생성
    const formData = new FormData(e.currentTarget);

    // 서버에 요청
    // Fetch()
    // try {
    //   const response = await fetch('http://localhost:4000/api/signup', {
    //     method: 'POST',
    //     body: formData,
    //   });

    //   const data = await response.json();
    //   console.log(data);
    // } catch (err) {
    //   console.error(err);
    // }

    fetch(ENDPOINT, createRequestOption(formData))
      .then((response) => response.json())
      .then((responseData) => {
        setResponseData(responseData as ResponseDataType);
      })
      .catch((error) => console.error(error));

    // 서버에서 응답

    // UI에 반영
  };

  // eslint-disable-next-line @typescript-eslint/require-await
  const handleSubmitAction = async (formData: FormData) => {
    try {
      const response = await fetch(ENDPOINT, createRequestOption(formData));
      const jsonData = await response.json();
      setResponseData(jsonData as ResponseDataType);
    } catch (err) {
      console.error(err);
    }
  };

  if (responseData) {
    return (
      <article className="userProfile" id={responseData.id}>
        <h2 className="userProfile--name">{responseData.name}</h2>
        {!responseData.message ? (
          <>
            <img
              src={`http://localhost:4000${responseData.profileImage}`}
              alt=""
              width={64}
              height={64}
            />
            <p>{responseData.email}</p>
          </>
        ) : (
          <p>{responseData.message}</p>
        )}
      </article>
    );
  }

  return (
    <section style={{ marginInline: '48px' }}>
      <h2>회원 가입 폼 (POST 메서드)</h2>
      <form
        // onSubmit={handleSubmitProsise}
        action={handleSubmitAction}
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
