import Heading from '@/components/heading';
import Section from '@/components/section';

function DashboardPage() {
  const handleSignOut = () => {
    console.log('로그아웃');
  };

  return (
    <Section level={2}>
      <Heading>대시보드</Heading>
      <form>
        <button type="submit" formAction={handleSignOut}>
          로그아웃
        </button>
      </form>
    </Section>
  );
}

export default DashboardPage;
