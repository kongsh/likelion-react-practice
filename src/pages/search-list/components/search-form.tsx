import { tm } from '@/utils/tw-merge';
import { useId, useState } from 'react';
import { deleteQueryParam, setQueryParam } from '../utils/search-params';

// 브라우저에서 쿼리 스트링(문자값) 디코딩하여 가져오는 함수
const getQueryString = () => decodeURIComponent(location.search);

interface SearchFormProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

function SearchForm({ query, setQuery }: SearchFormProps) {
  const [queryString, setQueryString] = useState(getQueryString);
  const searchInputId = useId();

  const words = query.trim();
  const isEnabledSearch = words.length > 0;

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };

  const handleSearch = () => {
    if (words.length > 0) {
      setQueryParam(words);
      setQueryString(getQueryString);
    } else {
      deleteQueryParam();
    }
  };

  return (
    <>
      <output className="bg-react text-white px-4 py-2 rounded-full text-xs font-mono">
        {queryString}
      </output>
      <form className={tm('mb-10')} action={handleSearch}>
        <label htmlFor={searchInputId} className="sr-only">
          카드 검색
        </label>
        <div className={tm('flex gap-1')}>
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
            aria-disabled={!isEnabledSearch}
            className={tm(
              'cursor-pointer opacity-80',
              'grid place-content-center',
              'bg-react text-white',
              'px-4 py-2 rounded-sm',
              // 'hover:not-[aria-diabled=true]:opacity-100',
              'hover:opacity-100',
              'aria-disabled:cursor-not-allowed aria-disabled:opacity-60'
            )}
          >
            검색
          </button>
        </div>
      </form>
    </>
  );
}

export default SearchForm;
