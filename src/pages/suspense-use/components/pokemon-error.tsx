import PokemonLayout from './pokemon-layout';

function PokemonError() {
  return (
    <PokemonLayout>
      <p role="alert">포켓몬 통신에서 오류가 발생했습니다. 😥</p>
    </PokemonLayout>
  );
}

export default PokemonError;
