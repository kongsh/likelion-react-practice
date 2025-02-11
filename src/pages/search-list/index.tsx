import SearchForm from './components/search-form';
import SearchedList from './components/searched-list';
import { useState } from 'react';
import colorMoodList from './data/color-mood-list';
import { ColorMoodList } from './types';

function SearchListPage() {
  const [list] = useState<ColorMoodList>(colorMoodList);

  return (
    <section>
      <h2 className="text-2xl font-semibold text-react">카드 검색 리스트</h2>
      <SearchForm />
      <SearchedList list={list} />
    </section>
  );
}

export default SearchListPage;
