import { getPokemons, getColectionPokemons } from "../getPokemon";
import { useEffect, useState } from "react";
import { Button, Section } from "./tags-stayle";
import { PokemonsList } from "./pokemonList";
import { numberLimit } from "../variables";

const ColectionOfPokemons = () => {
  const [colection, setPokemons] = useState({
    pokemons: [],
  });

  const setPokemon = async () => {
    const colectionPokemons = await getColectionPokemons(numberLimit.value);
    const data = await getPokemons(colectionPokemons);
    const result = await Promise.all(data);
    setPokemons({
      pokemons: result,
    });
  };

  useEffect(() => {
    const fetchData = () => {
      setPokemon();
    };
    fetchData();
  }, []);

  return (
    <Section>
      <PokemonsList pokemons={colection.pokemons} />
      <Button
        onClick={async () => {
          numberLimit.value += 5;
          setPokemon();
        }}
      >
        Mais Pokemons
      </Button>
    </Section>
  );
};

export default ColectionOfPokemons;
