import { tm } from '@/utils/tw-merge';
import { useId } from 'react';

interface SearchFromProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

function SearchForm({ setSearch }: SearchFromProps) {
  const searchId = useId();

  const handleSearch = (formData: FormData) => {
    const search = (formData.get('search') as string).trim();

    if (search.length === 0) {
      return alert('검색어를 입력해주세요.');
    }

    setSearch(search);
  };

  const handleReset = () => {
    setSearch('');
  };

  return (
    <section>
      <h2 className="font-semibold text-xl">메모 검색</h2>
      <form
        action={handleSearch}
        onReset={handleReset}
        className={tm('flex gap-1 items-center')}
      >
        <label htmlFor={searchId} className="sr-only">
          검색
        </label>
        <input
          type="search"
          name="search"
          id={searchId}
          className={tm('bg-react text-sky-400', 'px-2.5 py-1 rounded-sm')}
        />

        <div role="group" className={tm('flex')}>
          <button
            className={tm(
              'px-2.5 py-1 bg-react text-white',
              'rounded-l-sm',
              'cursor-pointer',
              'opacity-85 hover:opacity-100'
            )}
            type="submit"
          >
            검색
          </button>
          <button
            className={tm(
              'px-2 py-1 bg-react/20 text-black',
              'rounded-r-sm',
              'cursor-pointer',
              'opacity-85 hover:opacity-100'
            )}
            type="reset"
          >
            초기화
          </button>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
