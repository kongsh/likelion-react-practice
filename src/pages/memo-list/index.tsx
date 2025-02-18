import { useEffect, useState } from 'react';
import { PostgrestError } from '@supabase/supabase-js';
import { MemoItem } from './lib/supabase-client';
import { getMemoList } from './lib/api';
import MemoList from './components/memo-list';

function MemoListPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<null | MemoItem[]>(null);
  const [error, setError] = useState<null | PostgrestError>(null);

  useEffect(() => {
    let ignore = false;

    getMemoList({ fields: 'title,content,id', page: 1, perPage: 2 })
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
      <h1>Memo List</h1>
      {loading && <div role="alert">로딩 중...</div>}
      {error && <div role="alert">{error.message}</div>}
      {data && <MemoList items={data} />}
    </article>
  );
}

export default MemoListPage;
