import { Detail, TypeCard } from "./styles";
import PokemonType from "./../Type";
import PokemonStats from "./../Stats";

interface PokemonStatsProps {
  types: string;
  weight: number;
  height: number;
}

const PokemonDetail = (pokemonData: any): JSX.Element => {
  return (
    <>
      <Detail>
        <PokemonType
          types={pokemonData.types}
          weight={pokemonData.weight}
          height={pokemonData.height}
        />
      </Detail>
      <PokemonStats />
    </>
  );
};

export default PokemonDetail;
