import { tm } from '@/utils/tw-merge';
import { BoxLevelContext, useBoxLevel } from '../context/box-level';

function Box({
  level: userDefinedLevel,
  children,
}: {
  level?: number;
  children?: React.ReactNode;
}) {
  const boxLevel = useBoxLevel();
  const nextBoxlevel = userDefinedLevel ?? boxLevel + 1;

  if (nextBoxlevel > 5) {
    throw new Error('box level은 4까지만 가능');
  }

  return (
    <BoxLevelContext value={nextBoxlevel}>
      <div
        className={tm(
          'flex justify-center items-center',
          'size-60 bg-black/20 text-white p-5'
        )}
      >
        <span className="p-5">{nextBoxlevel}</span>
        {children}
      </div>
    </BoxLevelContext>
  );
}

export default Box;
