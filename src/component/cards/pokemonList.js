import { Link } from "react-router-dom";
import { Li, Ul, Img } from "./tags-stayle";

export const PokemonsList = (colection) => {
  return (
    <Ul>
      {colection.pokemons.map((props) => {
        const name = props.name;
        const image = props.sprites.front_default;
        const id = props.id;
        return (
          <Li key={id}>
            <Link
              to={`/${id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Img src={image} alt="imagem pokemon frente" />
              <h2>{name}</h2>
            </Link>
          </Li>
        );
      })}
    </Ul>
  );
};
