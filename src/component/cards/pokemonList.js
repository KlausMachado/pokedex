import { Link } from "react-router-dom";
import { Li, Ul, P, Img } from "./tags-stayle";

export const PokemonsList = (colection) => {
  return (
    <Ul>
      {colection.pokemons.map((props) => {
        const name = props.name;
        const image = props.sprites.front_default;
        const id = props.id;
        const types = props.types;
        return (
          <Li key={id}>
            <Link to={"/id"} style={{ textDecoration: "none", color: "black" }}>
              <Img src={image} alt="imagem pokemon frente" />
              <h2>{name}</h2>

              {types.map((types, i) => {
                const type = types.type.name;
                return <P key={i}>{type}</P>;
              })}
            </Link>
          </Li>
        );
      })}
    </Ul>
  );
};
