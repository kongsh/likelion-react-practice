import { useEffect, useState } from 'react';
import { PostgrestError } from '@supabase/supabase-js';
import { MemoItem } from './types';
import { getMemoItemById } from './lib/memo-list';
import MemoList from './components/memo-list';

function MemoListPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<null | MemoItem[]>(null);
  const [error, setError] = useState<null | PostgrestError>(null);

  useEffect(() => {
    let ignore = false;

    getMemoItemById(1)
      .then(({ data }) => {
        if (error) {
          throw error;
        }

        if (data && !ignore) {
          // setData(data);
          console.log(data);
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
      <h1>Memo List</h1>
      {loading && <div role="alert">로딩 중...</div>}
      {error && <div role="alert">{error.message}</div>}
      {data && <MemoList items={data} />}
    </article>
  );
}

export default MemoListPage;
