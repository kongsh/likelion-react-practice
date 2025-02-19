import { use } from 'react';
import { fetchPokemon } from '../api/pokemon';
import PokemonLayout from './pokemon-layout';

interface PokemonProps {
  id: number;
}

function Pokemon({ id }: PokemonProps) {
  const pokemon = use(fetchPokemon(id));

  console.log(pokemon);

  return (
    <PokemonLayout>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt=""
        title=""
        loading="lazy"
        className="size-28"
      />
      <figcaption className="text-sm text-stone-700 uppercase -translate-y-1">
        {pokemon.name}
      </figcaption>
    </PokemonLayout>
  );
}

export default Pokemon;
