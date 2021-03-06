import { getPokemons, getColectionPokemons } from "../getPokemon";
import { useContext, useEffect, useState } from "react";
import { Button, Section, H1 } from "./tags-stayle";
import { PokemonsList } from "./pokemonList";
import { numberLimit, offset} from "../variables";
import { ThemeContext } from "../../contexts/themeContext";

const ColectionOfPokemons = () => {
  const [colection, setPokemons] = useState({
    pokemons: [],
  });

  const setPokemon = async () => {
    const colectionPokemons = await getColectionPokemons(numberLimit.value, offset.value);
    const data = await getPokemons(colectionPokemons);
    const result = await Promise.all(data);
    setPokemons({
      pokemons:[...colection.pokemons, ...result] 
    });
  };

  useEffect(() => {
    const fetchData = () => {
      setPokemon();
    };
    fetchData();
  }, []);

  const { theme } = useContext(ThemeContext);

  if (colection.pokemons.length !== 0) {
    return (
      <Section style={{ color: theme.color, background: theme.background }}>
        <PokemonsList
          test-id="listaPokemon"
          pokemons={colection.pokemons}
          style={{ color: theme.color, background: theme.background }}
        />
        <Button
          test-id-button="buttonMorePokemons"
          style={{ color: theme.color, background: theme.background }}
          onClick={async () => {
            numberLimit.value += 10;
            offset.value += 10;
            setPokemon();
          }}
        >
          Mais Pokemons
        </Button>
      </Section>
    );
  } else {
    <Section>
      <H1>Carregando...</H1>
    </Section>;
  }
};

export default ColectionOfPokemons;
