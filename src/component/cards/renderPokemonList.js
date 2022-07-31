import { getPokemons, getColectionPokemons } from "../getPokemon";
import { useContext, useEffect, useState } from "react";
import { Button, Section, H1 } from "./tags-stayle";
import { PokemonsList } from "./pokemonList";
import { numberLimit } from "../variables";
import { ThemeContext } from "../../contexts/themeContext";

const ColectionOfPokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  let [paginationOffset, setpaginationOffset] = useState(0);

  const setPokemon = async () => {
    const colectionPokemons = await getColectionPokemons(
      numberLimit.value,
      paginationOffset
    );
    const data = await getPokemons(colectionPokemons);
    const result = await Promise.all(data);
    setPokemons([...pokemons, ...result]);
  };

  useEffect(() => {
    const fetchData = () => {
      setPokemon();
    };
    fetchData();
  }, []);

  const { theme } = useContext(ThemeContext);

  if (pokemons.length !== 0) {
    return (
      <Section style={{ color: theme.color, background: theme.background }}>
        <PokemonsList
          test-id="listaPokemon"
          pokemons={pokemons}
          style={{ color: theme.color, background: theme.background }}
        />
        <Button
          test-id-button="buttonMorePokemons"
          style={{ color: theme.color, background: theme.background }}
          onClick={async () => {
            paginationOffset += 8;
            setpaginationOffset(paginationOffset + numberLimit.value);
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
