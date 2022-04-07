import { useEffect, useState } from "react";
import { numberLimit, baseUrl } from "./variables";
import { Button, Li, Section, Ul } from "./card/card";

async function getColectionPokemons() {
  const response = await fetch(`${baseUrl}?limit=${numberLimit}`);
  const responseJson = await response.json();
  return responseJson.results;
}

async function getPokemons(param) {
  return param.map(async (props) => {
    const response = await fetch(`${baseUrl}${props.name}`);
    const responseJson = await response.json();
    return responseJson;
  });
}

const PokemonsList = (colection) => {
  return (
    <>
      <Ul>
        {colection.pokemons.map((props, index) => {
          console.log(props);
          return (
            <Li key={index}>
              <p>{props.name} teste</p>
            </Li>
          );
        })}
      </Ul>
      <Button>Mais Pokemons</Button>
    </>
  );
};

const ColectionOfPokemons = () => {
  const [colection, setPokemons] = useState({
    pokemons: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      const colectionPokemons = await getColectionPokemons();
      const data = await getPokemons(colectionPokemons);
      // console.log(data);
      // console.log(colectionPokemons)
      setPokemons({
        pokemons: data,
      });
    };
    fetchData();
  }, []);
  // console.log(colection.pokemons);
  return (
    <Section>
      <PokemonsList pokemons={colection.pokemons} />
    </Section>
  );
};

export default ColectionOfPokemons;
