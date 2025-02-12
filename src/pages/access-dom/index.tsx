import { useEffect, useRef, useState } from 'react';

function AccessDOMPage() {
  const abbrRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // DOM 노드 접근/조작
    if (abbrRef.current) {
      console.log(1, { 'abbrRef.current': abbrRef.current });
    }
  }, []);

  const [isParse, setIsParse] = useState(false);

  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, 1000);
  });
  return (
    <section>
      <h2 className="text-2xl text-react font-medium">
        <abbr
          title="Document Object Model"
          className="cursor-help no-underline"
          ref={abbrRef}
        >
          {isParse ? 'Document Object Model' : 'DOM'}
        </abbr>
        접근 조작
      </h2>
      <button
        type="button"
        onClick={() => {
          setIsParse((p) => !p);
        }}
      >
        DOM 용어 풀이
      </button>

      <form className="my-20">
        <div>
          <label htmlFor="like-a-book" className="sr-only">
            선호 도서
          </label>
          <input
            type="search"
            placeholder="좋아하는 도서는?"
            id="like-a-book"
            className="bg-white text-react px-3 py-1.5 rounded-sm"
            ref={searchInputRef}
          />
        </div>
        <button
          type="submit"
          className="bg-cyan-700 text-white w-20 py-2 rounded-sm"
        >
          저장
        </button>
      </form>
    </section>
  );
}

export default AccessDOMPage;
