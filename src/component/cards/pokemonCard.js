import { baseUrl } from "../variables";
import { Img, Section, H1, Ul, Ol, Li, P } from "./tags-stayle";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

async function getPokemon(id) {
  const response = await fetch(`${baseUrl}${id}`);
  const result = await response.json();
  return result;
}

export function PokemonCardInfo() {
  const [pokemon, setPokemon] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getPokemon(id);
      setPokemon({
        pokemon: result,
      });
    };
    fetchData();
  }, []);

  return (
    <Section
      style={{
        background: "linear-gradient(to top, #ede9d8 , #d4e4ed)",
        display: "block",
        padding: "50px",
      }}
    >
      <Img src={pokemon.sprites.front_default} />
      <H1>{pokemon.name}</H1>
      <Ul style={{ justifyContent: "center" }}>
        {pokemon.map((types, i) => {
          const type = types.type.name;
          return <Ol key={i}>{type}</Ol>;
        })}
      </Ul>
      <Ul
        style={{
          display: "block",
          padding: "0",
          background: "linear-gradient(to right, #E4E7E0 , #D9E5E8)",
        }}
      >
        <Li>
          {pokemon.map((moves, i) => {
            const move = moves.move.name;
            return <P key={i}>{move}</P>;
          })}
        </Li>
      </Ul>
      <Ul
        style={{
          padding: "0",
          background: "linear-gradient(to left, #ede9d8 , #dbd2cf)",
        }}
      >
        <Li>
          {pokemon.map((abilities, i) => {
            const ability = abilities.ability.name;
            return (
              <P style={{ fontWeight: "bold" }} key={i}>
                {ability}
              </P>
            );
          })}
        </Li>
      </Ul>
    </Section>
  );
}
