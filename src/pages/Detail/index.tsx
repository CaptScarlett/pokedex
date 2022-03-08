import PokemonDetail from "../../components/PokemonDetail";
import { useFetchPokemon } from "../../hooks/useFetchPokemon";
import {
  Container,
  Name,
  HeaderContainer,
  Image,
  ButtonBack,
  NavContainer,
  Text,
} from "./styles";
import { useNavigate } from "react-router-dom";

const DetailPage = () => {
  const { data, loading, error } = useFetchPokemon();

  const pokemon = data.length !== 0 && data[0];

  let navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  const render =
    data.length !== 0 ? (
      <>
        <HeaderContainer color={pokemon ? pokemon.backgroundColor : "navy"}>
          <NavContainer>
            <ButtonBack onClick={handleClick}>{` < Pokedex`}</ButtonBack>
            {pokemon && <Text> #{pokemon.id}</Text>}
          </NavContainer>

          {pokemon && (
            <Image
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
              loading="lazy"
            />
          )}
        </HeaderContainer>
        {pokemon && <Name>{pokemon.name}</Name>}
        <PokemonDetail {...pokemon} />
      </>
    ) : (
      <h1>not ready</h1>
    );

  return (
    <>
      <Container>
        {loading && <h1>LOADING</h1>}
        {error && <h1>{error}</h1>}
        {data.length !== 0 && render}
      </Container>
    </>
  );
};

export default DetailPage;
