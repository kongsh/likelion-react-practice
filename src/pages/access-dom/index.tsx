import { createElement, useState } from 'react';

function AccessDOMPage() {
  // 컴포넌트 바디(body)
  // 렌더링 프로세스
  // 순수성(purity)
  // 상태 선언, 업데이트
  // 리액트 자동 화면 변경

  const [isParse, setIsParse] = useState(false);

  // 사이드 이펙트 처리
  // 리액트돔의 노드가 아닌, 실제 DOM 노드에 접근
  // - 이벤트 핸들러
  // - 이펙트 함수
  // - ref 콜백 함수

  // JSX -> React API (JavaScript) 코드 컴파일 -> 브라우저 해석(parsing) -> UI 렌더링 (브라우저 페인팅) => 사용자
  return createElement(
    'section',
    {
      ref: (element) => {
        console.log('section', { element });
      },
    },
    createElement(
      'h2',
      {
        ref: (element) => {
          console.log('section > h2', { element });
        },
        className: 'text-2xl text-react font-medium',
      },
      createElement(
        'abbr',
        {
          ref: (element) => {
            console.log('section > h2 > abbr', { element });
          },
          title: 'Document Object Model',
          className: 'cursor-help no-underline',
        },
        isParse ? 'Document Object Model' : 'DOM'
      ),
      ' ',
      '접근/조작'
    ),
    createElement(
      'button',
      {
        type: 'button',
        className: 'cursor-pointer px-2 py-0.5 bg-black text-white',
        onClick: () => {
          setIsParse((p) => !p);
        },
      },
      'toggle button'
    )
  );
}

export default AccessDOMPage;
