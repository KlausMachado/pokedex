import { Li, Ul, P, Img } from "./card/tags-stayle";

export const PokemonsList = (colection) => {
  const resultPokemonListe = colection.pokemons.map((props) => {
    const name = props.name;
    const image = props.sprites.front_default;
    const types = props.types.map((types) => {
      const type = types.type.name;
      return (
        <>
          <P>{type}</P>
        </>
      );
    });
    return (
      <>
        <Ul>
          <Li key={props.id}>
            <Img src={image} alt="imagem pokemon frente" />
            <h2>{name}</h2>
            {types}
          </Li>
        </Ul>
      </>
    );
  });

  return resultPokemonListe;
};
