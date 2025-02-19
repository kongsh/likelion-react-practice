import PokemonLayout from './pokemon-layout';

function Pokemon() {
  return (
    <PokemonLayout>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        alt="pikachu"
        title="pikachu"
        className="size-28"
      />
    </PokemonLayout>
  );
}

export default Pokemon;
