import delay from '@/utils/delay';
import { useEffect, useState } from 'react';

interface State {
  loading: boolean;
  error: null | Error;
  data: null;
}

interface State {
  loading: boolean;
  error: null | Error;
  data: null;
}

const ENDPOINT = 'https://dummyjson.com/recipes/9';

function DataFetchingPage() {
  // 화면 업데이트를 위해 필요한 상태 선언
  // - loading: boolean / status: 'idle' | 'pending' | 'loading' | 'fulfilled' | 'rejected'
  // - error: null | Error
  // - data: null | T

  const [state, setState] = useState<State>({
    loading: false,
    error: null,
    data: null,
  });

  useEffect(() => {
    const controller = new AbortController();

    // let ignore = false;

    setState((s) => ({ ...s, loading: true }));

    const fetchData = async () => {
      try {
        await delay(2000);
        const response = await fetch(ENDPOINT, { signal: controller.signal });
        const jsonData = await response.json();

        // if (!ignore) {
        console.log('fulfilled:: update state');
        setState({
          loading: false,
          data: jsonData,
          error: null,
        });
        // }
      } catch (error) {
        if ((error as Error).name.includes('Abort')) {
          return;
        }

        // if (!ignore) {
        console.log('rejected:: update state');
        setState({
          loading: false,
          data: null,
          error: error as Error,
        });
        // }
      }
    };

    fetchData();

    return () => {
      // ignore = true;

      controller.abort();
    };
  }, []);

  const { error } = state;

  return (
    <section className="flex flex-col gap-5 my-5">
      <h2 className="text-2xl font-medium">데이터 가져오기</h2>

      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-medium">Loading</h3>
        <p>로딩 상태(loading)</p>
        <pre className="rounded p-6 overflow-auto bg-react text-[#22d045] text-sm">
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
