import CounterFunction from './components/counter.function';
import StopWatch from './components/stop-watch';

function MemoryComponentDataPage() {
  return (
    <section>
      <h2 className="text-2xl text-slate-800 font-medium mb-4">
        컴포넌트 데이터 메모리
      </h2>

      <h3 className="text-xl text-slate-700 font-medium mb-4">
        StopWatch 컴포넌트
      </h3>
      <StopWatch />

      <h3 className="text-xl text-slate-700 font-medium mb-4">
        Counter 컴포넌트 (렌더링과 무관한 데이터 메모리)
      </h3>
      <CounterFunction />
    </section>
  );
}

export default MemoryComponentDataPage;
