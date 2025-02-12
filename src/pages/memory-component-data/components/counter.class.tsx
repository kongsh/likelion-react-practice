import { tm } from '@/utils/tw-merge';
import React from 'react';

class Counter extends React.Component {
  state = {
    count: 0,
  };

  // 클래스 컴포넌트의 인스턴스는
  // this를 사용해 자신의 속성을 기억
  prevCount = this.state.count;

  render() {
    const { count } = this.state;
    const { prevCount } = this;

    console.log('이전 count:', prevCount);
    console.log('현재 count:', count);

    return (
      <>
        <button
          type="button"
          onClick={this.handleIncrease}
          className={tm(
            'cursor-pointer opacity-90',
            'grid place-content-center',
            'bg-react text-white px-7 py-0.5 rounded-full font-semibold',
            'hover:opacity-100'
          )}
        >
          {count}
        </button>

        <dl className="border-4 rounded-md p-4 my-4 w-48 flex flex-col gap-2">
          <div className="flex justify-between">
            <dt className="text-slate-900">이전 count 값</dt>
            <dd className="font-black">{prevCount}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-slate-900">현재 count 값</dt>
            <dd className="font-black">{count}</dd>
          </div>
        </dl>
      </>
    );
  }

  handleIncrease = () => {
    const { count } = this.state;

    // 다음 렌더링에서 이전 count 값 기억 (가능)
    this.prevCount = count;

    // 다음 렌더링에 사용될 상태 값 업데이트
    this.setState({
      count: count + 1,
    });
  };
}

export default Counter;
