import { useEffect, useState } from 'react';
import { PostgrestError } from '@supabase/supabase-js';
import { MemoItem } from './lib/supabase-client';
import { getMemoList, subscribe } from './lib/api';
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

  useEffect(() => {
    const channel = subscribe((payload) => {
      switch (payload.eventType) {
        case 'INSERT': {
          setData((data) => {
            if (data) {
              const nextData = [...data, payload.new] as MemoItem[];
              return nextData;
            } else {
              return data;
            }
          });
          break;
        }
        case 'UPDATE': {
          setData((data) => {
            const nextData = data!.map((item) =>
              item.id === payload.new.id ? payload.new : item
            );
            return nextData as MemoItem[];
          });
          break;
        }
        case 'DELETE': {
          setData((data) => {
            const nextData = data!.filter((item) => item.id !== payload.old.id);
            return nextData;
          });
        }
      }
    });

    return () => {
      channel.unsubscribe();
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
