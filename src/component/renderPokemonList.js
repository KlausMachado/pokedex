import { getPokemons, getColectionPokemons } from "./getPokemon";
import { useEffect, useState } from "react";
import { Button, Section } from "./card/tags-stayle";
import { PokemonsList } from "./pokemonList";

const ColectionOfPokemons = () => {
  const [colection, setPokemons] = useState({
    pokemons: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      const colectionPokemons = await getColectionPokemons();
      const data = await getPokemons(colectionPokemons);
      data.map((data) => {
        Promise.all([data]).then((value) => {
          console.log(value);
          setPokemons({
            pokemons: value,
          });
        });
      });
    };
    fetchData();
  }, []);
  console.log(colection.pokemons);

  return (
    <Section>
      <PokemonsList pokemons={colection.pokemons} />
      <Button>Mais Pokemons</Button>
    </Section>
  );
};

export default ColectionOfPokemons;
