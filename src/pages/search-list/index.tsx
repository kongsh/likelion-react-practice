import SearchForm from './components/search-form';
import SearchedList from './components/searched-list';
import { useEffect, useState } from 'react';
import colorMoodList from './data/color-mood-list';
import { ColorMoodItem, ColorMoodList } from './types';
import { tm } from '@/utils/tw-merge';
import { deleteQueryParam, getQueryParam } from './utils/search-params';

const getQueryState = () => getQueryParam() ?? '';

function SearchListPage() {
  const [list, setList] = useState<ColorMoodList>(colorMoodList);

  const handleUpdateList = (item: ColorMoodItem, isFavorited: boolean) => {
    setList(
      list.map((it) =>
        it.id === item.id
          ? {
              ...it,
              isFavorited,
            }
          : it
      )
    );
  };

  // 지연된 초기화
  const [query, setQuery] = useState(getQueryState);

  useEffect(() => {
    const handlePopState = () => {
      setQuery(getQueryState);
    };

    globalThis.addEventListener('popstate', handlePopState);

    return () => {
      globalThis.removeEventListener('popstate', handlePopState);
      deleteQueryParam();
    };
  }, []);

  return (
    <section className={tm('flex flex-col gap-5 items-center')}>
      <h2 className="text-2xl font-medium text-react">카드 검색 리스트</h2>
      <SearchForm query={query} setQuery={setQuery} />
      <SearchedList query={query} list={list} onUpdate={handleUpdateList} />
    </section>
  );
}

export default SearchListPage;
