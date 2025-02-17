import delay from '@/utils/delay';
import { useEffect, useState } from 'react';

interface State {
  loading: boolean;
  error: null | Error;
  data: null;
}

function DataFetchingPage() {
  const [state, setState] = useState<State>({
    loading: false,
    error: null,
    data: null,
  });

  useEffect(() => {
    // 상태 업데이트 제외 설정을 위한 변수
    let ignore = false;

    setState((s) => ({ ...s, loading: true }));

    const fetchData = async () => {
      try {
        await delay(2000);
        const response = await fetch('https://dummyjson.com/recipes/1');
        const jsonData = await response.json();

        // ignore 값이 false일 때만 상태 업데이트
        if (!ignore) {
          console.log('fulfilled');

          setState({
            loading: false,
            data: jsonData,
            error: null,
          });
        }
      } catch (error) {
        if (!ignore) {
          console.log('rejected');
          setState({
            loading: false,
            data: null,
            error: error as Error,
          });
        }
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, []);

  const { error } = state;

  return (
    <section className="flex flex-col gap-5 my-5">
      <h2 className="text-2xl font-medium">데이터 가져오기</h2>

      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-medium">Loading</h3>
        <p>로딩 상태(loading)</p>
        <pre className="rounded p-6 overflow-auto bg-react text-[#2cc02c] text-sm">
          {state.loading.toString()}
        </pre>
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-medium">Data</h3>
        <p>성취(fulfilled)</p>
        <pre className="rounded p-6 overflow-auto bg-react text-[#27a0cc] text-sm">
          {JSON.stringify(state.data, null, 2) ?? 'DATA'}
        </pre>
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-medium">Error</h3>
        <p>거부(rejected)</p>
        <pre className="rounded p-6 overflow-auto bg-react text-[#f0439f] text-sm">
          {error ? error.message : 'ERROR'}
        </pre>
      </div>
    </section>
  );
}

export default DataFetchingPage;
