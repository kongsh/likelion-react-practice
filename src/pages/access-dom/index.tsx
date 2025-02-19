import { useEffect, useRef, useState } from 'react';
import TiltBox from './components/tilt-box';
import SearchInput from './components/search-input';

function AccessDOMPage() {
  const [isParse, setIsParse] = useState(false);

  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, 1000);
  }, []);

  return (
    <>
      <title>DOM 접근 조작 | 리액트 플레이그라운드</title>
      <section>
        <h2 className="text-2xl text-react font-medium">
          <abbr
            title="Document Object Model"
            className="cursor-help no-underline"
          >
            {isParse ? 'Document Object Model' : 'DOM'}
          </abbr>{' '}
          접근/조작
        </h2>
        <button
          type="button"
          onClick={() => {
            setIsParse((p) => !p);
          }}
        >
          DOM 용어 풀이
        </button>

        <form className="my-10 flex">
          <SearchInput ref={searchInputRef} />
        </form>

        <div className="flex flex-wrap">
          {Array(12)
            .fill(null)
            .map((_, index) => (
              <TiltBox key={index}>{index}</TiltBox>
            ))}
        </div>
      </section>
    </>
  );
}

export default AccessDOMPage;
