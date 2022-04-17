import { getPokemons, getColectionPokemons } from "../getPokemon";
import { useEffect, useState } from "react";
import { Button, Section } from "./tags-stayle";
import { PokemonsList } from "./pokemonList";
import { numberLimit } from "../variables";

const ColectionOfPokemons = () => {
  const [colection, setPokemons] = useState({
    pokemons: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const colectionPokemons = await getColectionPokemons(numberLimit.value);
      const data = await getPokemons(colectionPokemons);
      const result = await Promise.all(data);
      setPokemons({
        pokemons: result,
      });
    };
    fetchData();
  }, []);

  return (
    <Section>
      <PokemonsList pokemons={colection.pokemons} />
      <Button
        onClick={async () => {
          const newValue = (numberLimit.value += 5);
          const colectionPokemons = await getColectionPokemons(newValue);
          const data = await getPokemons(colectionPokemons);
          const result = await Promise.all(data);
          return setPokemons({
            pokemons: result,
          });
        }}
      >
        Mais Pokemons
      </Button>
    </Section>
  );
};

export default ColectionOfPokemons;
