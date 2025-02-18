import { useEffect, useState } from 'react';
import { PostgrestError } from '@supabase/supabase-js';
import { MemoItem } from './lib/supabase-client';
import { getMemoList } from './lib/api';
import MemoList from './components/memo-list';
import Loading from './components/loading';

function MemoListPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<null | MemoItem[]>(null);
  const [error, setError] = useState<null | PostgrestError>(null);

  useEffect(() => {
    let ignore = false;

    getMemoList()
      .then(({ error, data }) => {
        if (error) {
          throw error;
        }

        if (data && !ignore) {
          setData(data);
        }
        setLoading(false);
      })
      .catch((error: PostgrestError) => {
        setError(error);
        setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <article>
      <h1 className="sr-only">메모 리스트 (with supabase)</h1>
      {loading && <Loading size={24} />}
      {error && <div role="alert">{error.message}</div>}
      {data && <MemoList items={data} />}
    </article>
  );
}

export default MemoListPage;
