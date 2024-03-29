import { Link } from "react-router-dom";
import { Li, Ul, Img, H1 } from "./tags-stayle";
import { ThemeContext } from "../../contexts/themeContext";
import { useContext } from "react";

export const PokemonsList = (pokemons, id) => {
  const { theme } = useContext(ThemeContext);

  if (pokemons !== undefined) {
    return (
      <Ul key={id} >
        {pokemons.pokemons.map((props) => {
          const name = props.name;
          const image = props.sprites.front_default;
          return (
            <Li key={props.id}>
              <Link
                to={`/${id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Img src={image} alt="imagem pokemon frente" />
                <h2 style={{ color: theme.color }}>{name}</h2>
              </Link>
            </Li>
          );
        })}
      </Ul>
    );
  } else {
    <Ul>
      <H1>Carregando...</H1>
    </Ul>
  }
};
