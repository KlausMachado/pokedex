import { baseUrl } from "../variables";
import { Img, Section, H1 } from "./tags-stayle";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";
import styled from "styled-components";
import { Abilities, Moves, Types } from "./pokemonDetails";

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

  const { theme } = useContext(ThemeContext);

  if (pokemon.data.length !== 0) {
    return (
      <Section
        style={{
          color: theme.color,
          background: theme.background,
          display: "block",
          padding: "50px",
          marginLeft: "80px",
          marginRight: "80px",
        }}
      >
        <Img
          src={pokemon.data.sprites?.front_default}
          style={{ width: "250px", height: "250px" }}
        />
        <H1 style={{ color: theme.color, marginTop: "0" }}>
          {pokemon.data.name}
        </H1>
        <Div
          style={{
            background: theme.background,
          }}
        >
          <Types pokemon={pokemon.data} />
        </Div>
        <H2>MOVES</H2>
        <Div2>
          <Moves pokemon={pokemon.data} />
        </Div2>
        <H2>ABILITIES</H2>
        <Div2>
          <Abilities pokemon={pokemon.data} />
        </Div2>
      </Section>
    );
  } else {
    <Section>
      <H1>Carregando...</H1>
    </Section>
  }
}

//styled componentes
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 80px;
`;

const Div2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  ::before {
    content: "";
    display: flex;
    width: 100%;
    border: 0.2px solid #57abdc39;
    margin-bottom: 125px;
    margin-top: -105px;
  }
`;

const H2 = styled.h2`
  margin-bottom: 20px;
  margin-top: 100px;
  padding: 2px;
  font-size: 44px;
  letter-spacing: 5px;
  text-shadow: #fdcf00 0.1em 0.1em 0.2em;
  position: relative;
  ::before {
    content: "";
    background: url(../../images/pokebola.png) center no-repeat;
    position: absolute;
    width: 50px;
    height: 50px;
    left: 40%;
  }
`;
