import { useState } from 'react';
import { MemoItem } from '../lib/supabase-client';
import SearchedList from './searched-list';
import SearchForm from './search-form';
import CreateForm from './create-form';

interface MemoListProps {
  items: MemoItem[];
}

function MemoList({ items }: MemoListProps) {
  const [search, setSearch] = useState('');

  return (
    <div>
      <CreateForm />
      {/* CreateForm */}
      <hr className="my-5 border-black/40" />
      {/* SearchedForm */}
      <SearchForm setSearch={setSearch} />
      <hr className="my-5 border-black/40" />
      {/* SearchedList */}
      <SearchedList items={items} search={search} />

      {/* <pre>{JSON.stringify(items, null, 2)}</pre> */}
    </div>
  );
}

export default MemoList;
