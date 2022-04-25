import { baseUrl } from "../variables";
import { Img, Section, H1, Ul, Li } from "./tags-stayle";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

async function getPokemon(id) {
  const response = await fetch(`${baseUrl}${id}`);
  const result = await response.json();
  return result;
}

export function PokemonCardInfo() {
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

  // console.log(pokemon.data)
  // console.log(pokemon.data.types)
  return (
    <Section
      style={{
        background: "linear-gradient(to top, #ede9d8 , #d4e4ed)",
        display: "block",
        padding: "50px",
      }}
    >
      <Img src={pokemon.data.sprites?.front_default} />
      <H1>{pokemon.data.name}</H1>
      <Ul
        style={{
          display: "block",
          padding: "0",
          background: "linear-gradient(to right, #E4E7E0 , #D9E5E8)",
        }}
      >
        {Object.keys(pokemon.data).forEach(() => {
          const types = pokemon.data.types;
          return types.map((props, i) => {
            const type = props.type.name;
            // console.log(type);
            return <Li key={i}>{type}</Li>;
          });
        })}

        {Object.keys(pokemon.data).forEach((i) => {
          const move = pokemon.data.moves;
          return <Li key={i}>{move}</Li>;
        })}
        {Object.keys(pokemon).forEach((abilities, i) => {
          const ability = abilities.ability;
          return (
            <Li style={{ fontWeight: "bold" }} key={i}>
              {ability}
            </Li>
          );
        })}
      </Ul>
    </Section>
  );
}
