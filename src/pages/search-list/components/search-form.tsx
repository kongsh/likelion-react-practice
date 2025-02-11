import { tm } from '@/utils/tw-merge';
import { useId } from 'react';
import { setQueryParam } from '../utils/search-params';

interface SearchFormProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

function SearchForm({ query, setQuery }: SearchFormProps) {
  const searchInputId = useId();

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };

  const handleSearch = () => {
    setQueryParam(query);
  };

  return (
    <form className={tm('mb-10')} action={handleSearch}>
      <label htmlFor={searchInputId} className="sr-only">
        카드 검색
      </label>
      <div className={tm('flex gap-4')}>
        <input
          type="search"
          name="query"
          id={searchInputId}
          className={tm(
            'rounded-sm px-2 py-1',
            'bg-white text-react font-medium'
          )}
          value={query}
          onChange={handleQuery}
        />
        <button
          type="submit"
          className={tm(
            'cursor-pointer opacity-90',
            'grid place-content-center',
            'bg-react text-white',
            'px-4 py-2 rounded-sm',
            'hover:opacity-100'
          )}
        >
          검색
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
