import { List } from "./styles";
import PokemonCard from "../../components/PokemonCard";
import MainHeader from "../../components/Header";
import { useFetchPokemon } from "../../hooks/useFetchPokemon";

const MainPage = () => {
  const { data, loading, error } = useFetchPokemon();

  const renderPokemon = (
    <List>
      {data
        ?.sort((a) => a.id) //FIX SORT
        .map((p) => (
          <PokemonCard
            key={p.id}
            name={p.name}
            backgroundColor={p.backgroundColor}
            pokePic={p.sprites.other.dream_world.front_default}
          />
        ))}
    </List>
  );

  return (
    <>
      <MainHeader header="Pokedex" />
      {data.length !== 0 && !loading && renderPokemon}
      {loading && <h1>LOADING</h1>}
    </>
  );
};

export default MainPage;
