import { tm } from '@/utils/tw-merge';
import { Ref, useId, useImperativeHandle, useRef, useState } from 'react';
import { deleteQueryParam, setQueryParam } from '../utils/search-params';

// 브라우저에서 쿼리 스트링(문자값) 디코딩하여 가져오는 함수
const getQueryString = () => decodeURIComponent(location.search);

const convertQueryString = (queryArray: string[]) =>
  queryArray.filter(Boolean).join(' ').trim();

interface SearchFormProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  ref?: Ref<{ focus: () => void; select: () => void; remove: () => void }>;
}

function SearchForm({ query, setQuery, ref }: SearchFormProps) {
  const [, setQueryString] = useState(getQueryString);
  const searchInputId = useId();

  const words = query
    .split(' ')
    .filter(Boolean)
    .map((word) => word.toLowerCase().trim());
  const isEnabledSearch = words.length > 0;

  const checkPeace = words.includes('평화');
  const checkRedColor = words.includes('빨간색');
  const checkConcentration = words.includes('집중력');

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };

  const handleSearch = () => {
    if (words.length > 0) {
      setQueryParam(convertQueryString(words));
      setQueryString(getQueryString);
    } else {
      deleteQueryParam();
    }
  };

  const handleCheck = (tag: string, isChecked: boolean) => {
    const newWords = isChecked
      ? [...words, tag]
      : words.filter((word) => word !== tag);
    const nextQuery = convertQueryString(newWords);
    setQuery(nextQuery);
  };

  // const searchInputRef = useRef<HTMLInputElement>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => {
    const inputElement = inputRef.current;

    // 명령형 핸들러 집합
    const focus = () => {
      if (inputElement) {
        inputElement.focus();
      }
    };

    const select = () => {
      if (inputElement) {
        inputElement.select();
      }
    };

    const remove = () => {
      if (inputElement) {
        inputElement.remove();
      }
    };

    return {
      focus,
      select,
      remove,
    };
  });

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
            ref={inputRef}
          />
          <button
            type="submit"
            aria-disabled={!isEnabledSearch}
            className={tm(
              'cursor-pointer opacity-80',
              'grid place-content-center',
              'bg-react text-white',
              'px-4 py-2 rounded-sm',
              'hover:opacity-100',
              'aria-disabled:cursor-not-allowed'
            )}
          >
            검색
          </button>
        </div>
        <div className="flex gap-4 my-3">
          <label className="inline-flex gap-1 items-center">
            <input
              type="checkbox"
              className="size-4 accent-react"
              checked={checkPeace}
              onChange={(e) => handleCheck('평화', e.currentTarget.checked)}
            />
            평화
          </label>
          <label className="inline-flex gap-1 items-center">
            <input
              type="checkbox"
              className="size-4 accent-react"
              checked={checkRedColor}
              onChange={(e) => handleCheck('빨간색', e.currentTarget.checked)}
            />
            빨간색
          </label>
          <label className="inline-flex gap-1 items-center">
            <input
              type="checkbox"
              className="size-4 accent-react"
              checked={checkConcentration}
              onChange={(e) => handleCheck('집중력', e.currentTarget.checked)}
            />
            집중력
          </label>
        </div>
      </form>
    </>
  );
}

export default SearchForm;
