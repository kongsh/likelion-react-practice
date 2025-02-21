import Heading from '@/components/heading';
import Section from '@/components/section';
import Title from '@/components/title';
import { useAuthStore } from '@/stores/auth';

function AuthManagementPage() {
  const signIn = useAuthStore((s) => s.signIn);
  const signOut = useAuthStore((s) => s.signOut);

  const handleSignin = () => {
    const user = {
      name: '가나다',
      email: 'qwd@wdq.dwq',
      token: crypto.randomUUID(),
    };
    signIn(user);
  };

  return (
    <>
      <Title>사용자 관리</Title>
      <Section level={2} className="flex flex-col gap-4">
        <Heading className="text-2xl font-medium">사용자 관리</Heading>

        <form>
          <button
            type="submit"
            formAction={handleSignin}
            className="px-3 py-2 bg-black text-white"
          >
            로그인
          </button>
          <button
            type="submit"
            formAction={signOut}
            className="px-3 py-2 bg-white"
          >
            로그아웃
          </button>
        </form>
      </Section>
    </>
  );
}

export default AuthManagementPage;
