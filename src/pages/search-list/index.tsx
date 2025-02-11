import SearchForm from './components/search-form';
import SearchedList from './components/searched-list';
import { useState } from 'react';
import colorMoodList from './data/color-mood-list';
import { ColorMoodItem, ColorMoodList } from './types';
import { tm } from '@/utils/tw-merge';

function SearchListPage() {
  const [list, setList] = useState<ColorMoodList>(colorMoodList);
  const [query, setQuery] = useState('');

  const handleUpdateList = (item: ColorMoodItem, isFavorited: boolean) => {
    const nextList = list.map((it) =>
      it.id === item.id
        ? {
            ...it,
            isFavorited,
          }
        : it
    );

    setList(nextList);
  };

  return (
    <section className={tm('flex flex-col gap-5 items-center')}>
      <h2 className="text-2xl font-medium text-react">카드 검색 리스트</h2>
      <SearchForm query={query} setQuery={setQuery} />
      <SearchedList query={query} list={list} onUpdate={handleUpdateList} />
    </section>
  );
}

export default SearchListPage;
