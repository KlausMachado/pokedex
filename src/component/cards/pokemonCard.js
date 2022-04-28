import { baseUrl } from "../variables";
import { Img, Section, H1, Ul, Li, P } from "./tags-stayle";
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
          if (pokemon.data.hasOwnProperty("types")) {
            const types = pokemon.data.types;
            // console.log(types);
            return types.map((props, i) => {
              const type = props.type.name;
              return (
                <Li key={i}>
                  <p>{type}</p>
                </Li>
              );
            });
          } else {
            <P>Carregando...</P>;
          }
        })}

        {Object.keys(pokemon.data).forEach(() => {
          if (pokemon.data.hasOwnProperty("moves")) {
            const moves = pokemon.data.moves;
            return moves.map((props, i) => {
              const move = props.move.name;
              // console.log(move);
              return <Li key={i}>{move}</Li>;
            });
          } else {
            <P>Carregando...</P>;
          }
        })}
        {Object.keys(pokemon.data).forEach(() => {
          if (pokemon.data.hasOwnProperty("types")) {
            const abilitys = pokemon.data.abilities;
            return abilitys.map((props, i) => {
              const ability = props.ability.name;
              // console.log(ability);
              return (
                <Li style={{ fontWeight: "bold" }} key={i}>
                  {ability}
                </Li>
              );
            });
          } else {
            <P>Carregando...</P>;
          }
        })}
      </Ul>
    </Section>
  );
}
