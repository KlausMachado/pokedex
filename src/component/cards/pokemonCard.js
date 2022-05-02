import { baseUrl } from "../variables";
import { Img, Section, H1, Ul, Li, P } from "./tags-stayle";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";

async function getPokemon(id) {
  const response = await fetch(`${baseUrl}${id}`);
  const result = await response.json();
  return result;
}

export function PokemonCardInfo() {
  console.log("até aqui");
  const [pokemon, setPokemon] = useState({ data: [] });

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getPokemon(id);
      setPokemon({
        data: result,
      });
    };
    fetchData();
  }, []);

  // console.log(pokemon.data);
  const { theme } = useContext(ThemeContext);

  return (
    <Section
      style={{
        color: theme.color,
        background: theme.background,
        display: "block",
        padding: "50px",
      }}
    >
      <Img src={pokemon.data.sprites?.front_default} />
      <H1 style={{ color: theme.color }}>{pokemon.data.name}</H1>
      <Ul
        style={{
          display: "flex",
          width: "200px",
          height: "100px",
          background: theme.background,
        }}
      >
        {Object.keys(pokemon.data).forEach(() => {
          if (pokemon.data.hasOwnProperty("types")) {
            const types = pokemon.data.types;
            // console.log(types);
            const type = types[0].type.name;
            console.log(type);
            return (
              <Li
                style={{
                  width: "100px",
                  height: "100px",
                  background: theme.background,
                }}
              >
                <P style={{ color: theme.color }}>{type}</P>
              </Li>
            );
          } else {
            <P>Carregando...</P>;
          }
        })}
      </Ul>
    </Section>
  );
}
