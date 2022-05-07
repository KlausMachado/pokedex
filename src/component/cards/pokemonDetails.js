import { P } from "./tags-stayle";
import styled from "styled-components";
import { useEffect, useState } from "react";

export const Types = (props) => {
  if (props.pokemon.types != undefined) {
    return props.pokemon.types.map((props, i) => {
      const type = props.type;
      const typeName = type.name;
      return (
        <Li key={i}>
          <P style={{ fontSize: "30px" }}>{typeName}</P>
        </Li>
      );
    });
  } else {
    <P>Carregando...</P>;
  }
};

export const Moves = (props) => {
  if (props.pokemon.moves != undefined) {
    return props.pokemon.moves.map((props, i) => {
      const move = props.move;
      const moveName = move.name;
      return (
        <Li key={i}>
          <P style={{ fontSize: "30px" }}>{moveName}</P>
        </Li>
      );
    });
  } else {
    <P>Carregando...</P>;
  }
};

async function getAbilities(url) {
  const response = await fetch(`${url}`);
  const result = await response.json();
  // console.log(result);
  return result;
}

// return description.effect_entries.map((effect) => {
//   if (effect.language.name === "en") {
//     return <P>{effect.effect}</P>;
//   }
// });

const Description = (props) => {
  const [url, setUrl] = useState({ data: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await getAbilities(props.props);
      setUrl({
        data: result,
      });
    };
    fetchData();
  }, []);
  console.log(url.data);
  return url.data.effect_entries.map((effect, i) => {
    if (effect.language.name === "en") {
      return <P key={i}>{effect.effect}</P>;
    }
  });
};

export const Abilities = (props) => {
  if (props.pokemon.abilities != undefined) {
    return props.pokemon.abilities.map((props, i) => {
      const ability = props.ability;
      const abilityName = ability.name;
      const urlAbility = ability.url;

      return (
        <Li key={i}>
          <div>
            <P style={{ fontSize: "30px" }}>{abilityName}</P>
            <Description props={urlAbility} />
          </div>
        </Li>
      );
    });
  } else {
    <P>Carregando...</P>;
  }
};

//styled-components
const Li = styled.li`
  border-radius: 5px;
  box-shadow: 1px 1px 2px #406c84;
  list-style-type: none;
  margin: 15px;
  padding: 0 10px;
`;
