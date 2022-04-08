import { useEffect, useState } from "react";
import { numberLimit, baseUrl } from "./variables";
import { Button, Li, Section, Ul, LiAtributes, P, Img } from "./card/card";

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
  const resultPokemonListe = colection.pokemons.map((props, index) => {
    console.log(colection.pokemons);
    const name = props.name;
    const image = props.sprites.front_default;
    const types = props.types.map((types, index) => {
      const type = types.type.name
      return  (
        <>
          <LiAtributes key={index} >
            <P>{type}</P>
          </LiAtributes>
        </>
      )
    })

    return (
      <>
          
            <Li key={index}>
              <Img src={image} alt="imagem pokemon frente" />
              <h2>{name}</h2>
              <div>{types}</div>  
            </Li>
            

          
      </>
    );
  });

  return (
    <Ul>
        {resultPokemonListe}
    </Ul>
  )
};

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
          setPokemons({
            pokemons: value,
          });
        });
      });
    };
    fetchData();
  }, []);

  // function addPokemon(newPokemon) {
  //   setPokemons({
  //     pokemons: [...colection.pokemons, newPokemon]
  //   });
  // }

  // console.log(colection.pokemons);
  return (
    <Section>
      <PokemonsList pokemons={colection.pokemons} />
      <Button>Mais Pokemons</Button>
    </Section>
  );
};

export default ColectionOfPokemons;
