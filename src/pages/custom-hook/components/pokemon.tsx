import Loading from '@/pages/memo-list/components/loading';
import { tm } from '@/utils/tw-merge';
import type { Pokemon } from '../types';
import { useFetchData } from '@/hooks/use-fetch-data';

function Pokemon() {
  // 포켓몬 개별 정보 가져오기
  // 로딩, 에러, 데이터 상태 선언
  const { loading, error, data } = useFetchData<Pokemon>(
    'https://pokeapi.co/api/v2/pokemon/9'
  );

  return (
    <figure
      className={tm(
        'flex gap-5 justify-center',
        'border-4 border-black/10',
        'rounded-full p-6',
        'transition-colors duration-250 ease-in-out',
        'hover:border-black'
      )}
    >
      {/* <Loading size={24} label="데이터 로딩 중..." className="text-black/50" /> */}
      {loading && <Loading size={48} label="포켓몬 데이터 로딩 중..." />}
      {error && <div role="alert">{error.message}</div>}
      {data && (
        <img
          src={data.sprites.front_default}
          alt={data.name}
          className="size-40"
        />
      )}
    </figure>
  );
}

export default Pokemon;
