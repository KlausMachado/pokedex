import { baseUrl } from "../variables";
import { Img, Section, H1, Ul, Li, P } from "./tags-stayle";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";

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

  // console.log(pokemon.data);
  const { theme } = useContext(ThemeContext);

  // console.log(pokemon.data.types)

  const Types = () => {
    if (pokemon.data.hasOwnProperty("types")) {
      pokemon.data.types.map((props) => {
        // console.log(props.type)
        const type = props.type;
        const typeName = type.name;
        // console.log(typeName)
        return <P>{typeName}</P>;
      });
    } else {
      <P>Carregando...</P>;
    }
  };

  return (
    <Section
      style={{
        color: theme.color,
        background: theme.background,
        display: "block",
        padding: "50px",
      }}
    >
      <Img src={pokemon.data.sprites?.front_default} />
      <H1 style={{ color: theme.color }}>{pokemon.data.name}</H1>
      <div>
        <Types />
      </div>
    </Section>
  );
}

{
  /* <Ul
        style={{
          display: "flex",
          width: "200px",
          height: "100px",
          background: theme.background,
        }}
      >

<Li
          style={{
            width: "100px",
            height: "100px",
            background: theme.background,
          }}
        >
          <P style={{ color: theme.color }}>{types}</P>
        </Li>
        {}
      </Ul>

      
          
          Object.keys(pokemon.data).forEach(() => {
          const types = pokemon.data
        })*/
}
