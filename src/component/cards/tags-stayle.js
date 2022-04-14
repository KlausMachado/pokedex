import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    *{
        font-family: 'Amatic SC', cursive;
     }
`;

export const Section = styled.section`
  padding: 5% 15%;
  margin: 20px;
  border-radius: 25px;
  display: flex;
  align-itens: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  font-size: 26px;
`;

export const Ul = styled.ul`
  display: flex;
  align-itens: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const Li = styled.li`
  border: solid 2px #bcbfb3;
  border-radius: 5px;
  list-style-type: none;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 5px;
  margin: 2px;
  border-radius: 5px;
  width: 10rem;
  height: 4rem;
  font-size: 24px;
  font-weight: 700;
  background: linear-gradient(to bottom, #E4E7E0 , #9cd8e5);
  :hover {
    background: linear-gradient(to top, #E4E7E0 , #9cd8e5);
  }
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
