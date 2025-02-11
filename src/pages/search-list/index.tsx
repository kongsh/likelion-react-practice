import SearchForm from './components/search-form';
import SearchedList from './components/searched-list';
import { useState } from 'react';
import colorMoodList from './data/color-mood-list';
import { ColorMoodItem, ColorMoodList } from './types';

function SearchListPage() {
  const [list, setList] = useState<ColorMoodList>(colorMoodList);

  const handleUpdateList = (item: ColorMoodItem, isFavorited: boolean) => {
    const nextList = list.map((it) => {
      return it.id === item.id
        ? {
            ...it,
            isFavorited,
          }
        : it;
    });

    setList(nextList);
  };

  return (
    <section>
      <h2 className="text-2xl font-semibold text-react">카드 검색 리스트</h2>
      <SearchForm />
      <SearchedList list={list} onUpdate={handleUpdateList} />
    </section>
  );
}

export default SearchListPage;
