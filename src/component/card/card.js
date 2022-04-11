import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    *{
        font-family: 'Amatic SC', cursive;
     }
`;

export const Section = styled.section`
  padding: 10px;
  margin: 20px;
  border-radius: 25px;
  width: 60vw;
  display: flex;
  align-itens: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-size: 26px;
`;

export const Ul = styled.ul`
  display: flex;
  align-itens: center;
  justify-content: space-between;
  wrap: wrap;
`;
export const Li = styled.li`
  border: solid 2px #bcbfb3;
  border-radius: 5px;
  list-style-type: none;
`;

export const Button = styled.button`
  padding: 5px;
  margin: 2px;
  border-radius: 5px;
  width: 30%;
  font-size: 24px;
  font-weight: 700;
`;

export const Ol = styled.ol`
  border: solid 1px #bcbfb3;
  margin: 5px;
  padding: 2px;
  text-align: center;
  border-radius: 8px;
`;
export const P = styled.p`
  margin: 10px;
  font-weight: 400;
  font-size: 24px;
`;

export const Img = styled.img`
  width: 150px;
  height: 150px;
`;
export const H1 = styled.h1`
  font-weight: bold;
  font-size: 40px;
  text-shadow: grey 0.1em 0.1em 0.2em;
`;
