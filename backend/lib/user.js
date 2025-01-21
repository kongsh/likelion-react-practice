import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import bcrypt from 'bcrypt';

const FILE_PATH = fileURLToPath(new URL('../data/users.json', import.meta.url));
const OPTIONS = { encoding: 'utf-8' };
const saltRounds = 9;

export async function getUsers() {
  const users = await readFile(FILE_PATH, OPTIONS);
  return JSON.parse(users);
}

export async function findUserByEmail(email) {
  const users = await getUsers();
  return users.find((user) => user.email === email);
}

export async function createUser(userInfo) {
  const user = await findUserByEmail(userInfo.email);
  if (user) return null;

  const users = await getUsers();
  const hashedPassword = await bcrypt.hash(userInfo.password, saltRounds);

  users.push({
    name: userInfo.name,
    email: userInfo.email,
    password: hashedPassword,
    id: crypto.randomUUID(),
  });

  await writeFile(FILE_PATH, JSON.stringify(users, null, 2), OPTIONS);

  return userInfo;
}

export async function isRegisteredUser() {}
