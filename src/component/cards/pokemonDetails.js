import { P, H1 } from "./tags-stayle";
import styled from "styled-components";
import { useEffect, useState } from "react";

export const Types = (props) => {
  if (props.pokemon.types !== undefined) {
    return props.pokemon.types.map((props, i) => {
      const type = props.type;
      const typeName = type.name;
      return (
        <LiTypes key={i} type={typeName}>
          <P style={{ fontSize: "30px" }}>{typeName}</P>
        </LiTypes>
      );
    });
  } else {
    <P>Carregando...</P>;
  }
};

export const Moves = (props) => {
  if (props.pokemon.moves !== undefined) {
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
  return result;
}

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

  if (url.data.length !== 0) {
    return url.data.effect_entries.map((effect, i) => {
      if (effect.language.name === "en") {
        return <P key={i}>{effect.effect}</P>;
      }
    });
  } else {
    <P>Carregando...</P>;
  }
};

export const Abilities = (props) => {
  if (props.pokemon.abilities !== undefined) {
    return props.pokemon.abilities.map((props, i) => {
      const ability = props.ability;
      const abilityName = ability.name;
      const urlAbility = ability.url;

      return (
        <Li key={i}>
          <div>
            <H1 style={{ fontSize: "30px" }}>{abilityName}</H1>
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

const LiTypes = styled.li`
  border-radius: 5px;
  box-shadow: 2px 2px 3px
    ${(props) =>
      props.type == "poison"
        ? "#04f91d"
        : props.type == "grass"
        ? "#94c973"
        : props.type == "fire"
        ? "#d8340a"
        : props.type == "water"
        ? "#28abeb"
        : props.type == "bug"
        ? "#42960a"
        : props.type == "flying"
        ? "#4297a0"
        : props.type == "electric"
        ? "#fdcf00"
        : props.type == "ground"
        ? "#7c3c11"
        : props.type == "fairy"
        ? "#e57f84"
        : props.type == "fighting"
        ? "#f67b50"
        : props.type == "psychic"
        ? "#a16ae8"
        : props.type == "rock"
        ? "#746c70"
        : props.type == "steel"
        ? "#d4d4d4"
        : props.type == "ice"
        ? "#a1e0ea"
        : props.type == "ghost"
        ? "#f4eae6"
        : props.type == "dragon"
        ? "#a82810"
        : props.type == "dark"
        ? "#000000"
        : "#406c84"};
  list-style-type: none;
  margin: 15px;
  padding: 0 10px;
`;
