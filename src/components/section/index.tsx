import { useContext } from 'react';
import HeadingsLevelContext from '@/contexts/level';

type SectioningContent = Omit<
  React.ComponentProps<'section'>,
  keyof React.ComponentProps<'article'>
> &
  React.ComponentProps<'article'>;

type SectionProps = SectioningContent & {
  tag?: 'section' | 'article';
  level?: number;
};

function Section({
  tag: Component = 'section',
  level: userDefinedLevel,
  children,
  ...restProps
}: SectionProps) {
  const contextLevel = useContext(HeadingsLevelContext);
  const level = userDefinedLevel ?? contextLevel + 1;

  return (
    <HeadingsLevelContext.Provider value={level}>
      <Component {...restProps}>{children}</Component>
    </HeadingsLevelContext.Provider>
  );
}

export default Section;
