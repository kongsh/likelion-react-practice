import { tm } from '@/utils/tw-merge';
import { useEffect, useRef, useState } from 'react';

// 함수 호출 시점의 현재 시간 값 반환
const getDateNow = () => Date.now();

const FPS = 1000 / 60;

const formatTime = (time: number) => {
  const milliseconds = parseInt(`${time % 100}`, 10);

  const seconds = parseInt(`${(time / 1000) % 60}`, 10);

  const minutes = parseInt(`${(time / (1000 * 60)) % 60}`, 10);

  const hours = parseInt(`${(time / (1000 * 60 * 60)) % 60}`, 10);

  const [hh, mm, ss, ms] = [hours, minutes, seconds, milliseconds].map(
    (time) => {
      return time.toLocaleString('ko-KR', {
        minimumIntegerDigits: 2,
      });
    }
  );

  return `${hh}:${mm}:${ss}:${ms}`;
};

type IntervalId = ReturnType<typeof setInterval>;

function StopWatch() {
  const [startTime, setStartTime] = useState(getDateNow);
  const [nowTime, setNowTime] = useState(getDateNow);
  const [recordTime, setRecordTime] = useState(0);
  const [isStart, setIsStart] = useState(false);

  const resetTime = () => {
    setStartTime(getDateNow);
    setNowTime(getDateNow);
  };

  const clearIntervalIdRef = useRef<IntervalId>(undefined);

  useEffect(() => {
    if (isStart) {
      resetTime();
      clearIntervalIdRef.current = setInterval(() => {
        setNowTime(getDateNow);
      }, FPS);
    } else {
      clearInterval(clearIntervalIdRef.current);
      setRecordTime((recordTime) => recordTime + nowTime - startTime);
      resetTime();
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

  const timeInfo = formatTime(recordTime + nowTime - startTime);

  return (
    <article aria-label="스톱워치" className="flex flex-col gap-2">
      <time
        dateTime={timeInfo}
        className="px-4 py-2 bg-black text-white text-lg text-center w-46 font-mono rounded-full"
      >
        {timeInfo}
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
