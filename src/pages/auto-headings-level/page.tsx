import Heading from '@/components/heading';
import Section from '@/components/section';
import Title from '@/components/title';

function AuthHeadingsLevel() {
  return (
    <>
      <Title>제목 자동 레벨 구성</Title>
      <Section level={2} className="flex flex-col gap-4">
        <Heading>섹셔닝 콘텐츠 제목 2</Heading>
        <Section tag="article" className="flex flex-col gap-4">
          <Heading>섹셔닝 콘텐츠 제목 3</Heading>
          <Heading>섹셔닝 콘텐츠 제목 3</Heading>
          <Section className="flex flex-col gap-4">
            <Heading>섹셔닝 콘텐츠 제목 4</Heading>
          </Section>
        </Section>
      </Section>
    </>
  );
}

export default AuthHeadingsLevel;
