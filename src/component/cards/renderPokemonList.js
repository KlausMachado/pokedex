import { getPokemons, getColectionPokemons } from "../getPokemon";
import { useContext, useEffect, useState } from "react";
import { Button, Section } from "./tags-stayle";
import { PokemonsList } from "./pokemonList";
import { numberLimit } from "../variables";
import { ThemeContext } from "../../contexts/themeContext";

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

  const { theme } = useContext(ThemeContext);

  return (
    <Section style={{ color: theme.color, background: theme.background }}>
      <PokemonsList
        pokemons={colection.pokemons}
        style={{ color: theme.color, background: theme.background }}
      />
      <Button
        style={{ color: theme.color, background: theme.hover }}
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
