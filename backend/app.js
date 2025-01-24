import cors from 'cors';
import express from 'express';
import { createUser, findUserByEmail, isRegisteredUser } from './lib/user.js';
import { resolve } from 'node:path';
import fileUpload from 'express-fileupload';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(resolve('./public')));
app.use(fileUpload());
app.use(cors());

app.post('/api/signin', async (req, res) => {
  const { useremail, userpassword } = req.body;

  if (!useremail || !userpassword) {
    return res.status(400).send(`
        <p style="color: red">로그인 정보인 이메일, 비밀번호 모두 입력이 필요합니다.</p>
    `);
  }

  const result = await isRegisteredUser(useremail, userpassword);

  if (result === null) {
    return res
      .status(400)
      .send(`<p>${useremail} 이메일 계정으로 가입되지 않은 사용자입니다.</p>`);
  }

  if (result) {
    const user = await findUserByEmail(useremail);
    return res.status(200).send(`<p>${user.name}님! 로그인 되었습니다.</p>`);
  } else {
    return res.status(400).send('<p>패스워드가 일치하지 않습니다. 🤔</p>');
  }
});

app.post('/api/signup', async (req, res) => {
  const { username, useremail, userpassword } = req.body;

  if (!username || !useremail || !userpassword) {
    return res.status(400).send(`
        <p style="color: red">회원 가입에 필요한 이름, 이메일, 비밀번호 모두 입력이 필요합니다.</p>
    `);
  }

  const profileImage = req.files?.userprofile ?? '';
  let profileImagePath = '';
  if (profileImage) {
    await profileImage.mv(resolve('public/files', profileImage.name));
    profileImagePath = `/files/${profileImage.name}`;
  } else {
    console.log('이미지 없음');
  }

  try {
    const newUser = await createUser({
      name: username,
      email: useremail,
      password: userpassword,
      profileImage: profileImagePath,
    });

    if (newUser) {
      const { password, ...user } = newUser;
      // res
      //   .status(201)
      //   .send(`<p>${newUser.name}님! 회원가입에 성공했습니다.</p>`);
      res.status(201).json(user);
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
