import { Item, Heading, Image } from "./styles";
import { ItemProps } from "./types";
import { Card } from "../Card";
import { Link } from "react-router-dom";

const PokemonCard = ({
  name,
  backgroundColor,
  pokePic,
}: ItemProps): JSX.Element => {
  return (
    <Item>
      <Link to={`/${name}`} style={{ textDecoration: "none" }}>
        <Card color={backgroundColor}>
          <Image src={pokePic} alt={name} />
          <Heading> {name}</Heading>
        </Card>
      </Link>
    </Item>
  );
};

export default PokemonCard;
