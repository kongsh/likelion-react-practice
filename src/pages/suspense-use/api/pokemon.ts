import { Pokemon } from '../types';

const _fetchPokemon = async (id: number) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();

  return data as Pokemon;
};

// 클라이언트 캐시가 필요
// Suspense -> use(Prosime) 결과 : 무한 루프에 빠짐(use는 서버단에서 사용하기 위해 만들어졌기 때문)
// Suspense -> use(Prosime) -> 캐싱 -> 한번만 실행(캐시 결과를 확인하기 때문)

const cache = new Map<number, Promise<Pokemon>>();

export const fetchPokemon = (id: number) => {
  const pokemonPromise = cache.get(id) ?? _fetchPokemon(id);
  cache.set(id, pokemonPromise);
  return pokemonPromise;
};
