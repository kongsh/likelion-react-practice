import Loading from '@/pages/memo-list/components/loading';
import { tm } from '@/utils/tw-merge';
import type { Pokemon } from '../types';
import useQuery from '@/hooks/use-query';

const pikachuQueryOptions = {
  queryKey: '@pokemon/pikachu',
  queryFn: () => fetch('https://pokeapi.co/api/v2/pokemon/25'),
};

const raichuQueryOptions = {
  queryKey: '@pokemon/raichu',
  queryFn: () => fetch('https://pokeapi.co/api/v2/pokemon/26'),
};

function PokemonWithUseQuery() {
  // 포켓몬 개별 정보 가져오기
  // 로딩, 에러, 데이터 상태 선언
  const pikachu = useQuery<Pokemon>(pikachuQueryOptions);
  const raichu = useQuery<Pokemon>(raichuQueryOptions);

  return (
    <>
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
        {pikachu.isLoading && (
          <Loading size={48} label="포켓몬 데이터 로딩 중..." />
        )}
        {pikachu.error && <div role="alert">{pikachu.error.message}</div>}
        {!pikachu.isLoading && pikachu.data && (
          <img
            src={pikachu.data.sprites.front_default}
            alt={pikachu.data.name}
            title={pikachu.data.name}
            className="size-40"
          />
        )}
      </figure>
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
        {raichu.isLoading && (
          <Loading size={48} label="포켓몬 데이터 로딩 중..." />
        )}
        {raichu.error && <div role="alert">{raichu.error.message}</div>}
        {!raichu.isLoading && raichu.data && (
          <img
            src={raichu.data.sprites.front_default}
            alt={raichu.data.name}
            title={raichu.data.name}
            className="size-40"
          />
        )}
      </figure>
    </>
  );
}

export default PokemonWithUseQuery;
