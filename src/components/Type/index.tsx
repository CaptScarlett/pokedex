import { Detail, TypeCard, DimentionContainer, DimentionText } from "./styles";

interface PokemonStatsProps {
  types: string;
  weight: number;
  height: number;
}

interface PokemonSizeProps {
  dimention: string;
  text: string;
}
const PokemonStats = ({ types, weight, height }: any): JSX.Element => {
  const PokemonSize = ({ dimention, text }: PokemonSizeProps): JSX.Element => (
    <DimentionContainer>
      <DimentionText>{dimention}</DimentionText>
      <p>{text}</p>
    </DimentionContainer>
  );
  return (
    <>
      <Detail>
        {types.map((a: any) => (
          <TypeCard>
            <p key={a.type.name}>{a.type.name}</p>
          </TypeCard>
        ))}
      </Detail>
      <PokemonSize dimention={`${weight}KG`} text="Weight" />
      <PokemonSize dimention={`${height}M`} text="Height" />
    </>
  );
};

export default PokemonStats;
