import express from 'express';
import { createUser } from './lib/user.js';

const app = express();

app.use(express.urlencoded({ extended: false }));

app.post('/api/signup', async (req, res) => {
  const { username, useremail, userpassword } = req.body;

  if (!username || !useremail || !userpassword) {
    return res.status(400).send(`
        <p style="color: red">회원 가입에 필요한 이름, 이메일, 비밀번호 모두 입력이 필요합니다.</p>
    `);
  }

  try {
    const newUser = await createUser({
      name: username,
      email: useremail,
      password: userpassword,
    });

    if (newUser) {
      res
        .status(201)
        .send(`<p>${newUser.name}님! 회원가입에 성공했습니다.</p>`);
    } else {
      res.status(400).send(`<p>${username}님은 이미 가입된 회원입니다.</p>`);
    }
  } catch (error) {
    res.status(500).send('새 사용자 생성에 문제가 발생했습니다.');
  }
});

app.get('/api/hello', (request, response) => {
  const { username, useremail } = request.query;
  if (username && useremail) {
    response.status(200).send(`
        <h1>hello ${username}!</h1>
        <p>your email address is ${useremail}</p>
    `);
  } else {
    response
      .status(400)
      .send('<p>사용자 이름과 이메일이 전송되지 않았습니다.</p>');
  }
});

app.listen(4000, () => {
  console.log('백엔드 프로그램 서버 구동 http://localhost:4000');
});
