export interface IPokemon {
  id: number;
  name: string;
  sprites: {
    other: { dream_world: { front_default: string } };
  };
  backgroundColor: string;
}
