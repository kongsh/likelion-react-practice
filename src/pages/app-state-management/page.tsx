import Heading from '@/components/heading';
import Section from '@/components/section';
import Counter from './components/counter.tsx';
import Title from '@/components/title';

function AppStateManagementPage() {
  return (
    <>
      <Title>앱 상태 관리</Title>
      <Section level={2} className="flex flex-col gap-4">
        <Heading className="text-2xl font-medium">
          애플리케이션 상태 관리 (with Zustand)
        </Heading>

        <Counter />
      </Section>
    </>
  );
}

export default AppStateManagementPage;
