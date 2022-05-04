import { P } from "./tags-stayle";
import styled from "styled-components";

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

export const Abilities = (props) => {
  if (props.pokemon.abilities != undefined) {
    return props.pokemon.abilities.map((props, i) => {
      const ability = props.ability;
      console.log(ability)
      const abilityName = ability.name;
      return (
        <Li key={i}>
          <P style={{ fontSize: "30px" }}>{abilityName}</P>
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
