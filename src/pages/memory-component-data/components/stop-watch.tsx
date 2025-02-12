import { tm } from '@/utils/tw-merge';
import { useEffect, useState } from 'react';

// 함수 호출 시점의 현재 시간 값 반환
const getTime = () => Date.now();

const FPS = 1000 / 60;

function StopWatch() {
  const [startTime, setStartTime] = useState(getTime);
  const [nowTime, setNowTime] = useState(getTime);
  const [recordTime, setRecordTime] = useState(0);
  const [isStart, setIsStart] = useState(false);

  const resetTime = () => {
    setStartTime(getTime);
    setNowTime(getTime);
  };

  useEffect(() => {
    let clearIntervalId: ReturnType<typeof setInterval> | number = 0;

    if (isStart) {
      resetTime();
      clearIntervalId = setInterval(() => {
        setNowTime(getTime);
      }, FPS);
    } else {
      clearInterval(clearIntervalId);
      setRecordTime((recordTime) => recordTime + nowTime - startTime);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isStart]);

  const handleStartOrPause = () => {
    setIsStart((s) => !s);
  };

  const handleStop = () => {
    setRecordTime(0);
    resetTime();
    setIsStart(false);
  };

  return (
    <article aria-label="스톱워치" className="flex flex-col gap-2">
      <time className="px-4 py-2 bg-black text-white text-lg text-center w-46">
        {recordTime + nowTime - startTime}
      </time>
      <div className="flex gap-1">
        <button
          type="button"
          className={tm(
            'cursor-pointer opacity-75',
            'grid place-content-center',
            'bg-react text-white px-7 py-0.5 rounded-full font-semibold',
            'hover:opacity-100'
          )}
          onClick={handleStartOrPause}
        >
          {isStart ? '일시정지' : '시작'}
        </button>
        <button
          type="button"
          className={tm(
            'cursor-pointer opacity-90',
            'grid place-content-center',
            'bg-sky-600 text-white px-7 py-0.5 rounded-full font-semibold',
            'hover:opacity-100'
          )}
          onClick={handleStop}
        >
          정지
        </button>
      </div>
    </article>
  );
}

export default StopWatch;
