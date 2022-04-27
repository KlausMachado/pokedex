import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    *{
        font-family: 'Amatic SC', cursive;
     }
`;

export const Body = styled.body`
  background: linear-gradient(to left, #000, #57acdc);
  padding: 10px 0 20px 0;
  height: 100%;
`;

export const Section = styled.section`
  padding: 5% 15%;
  margin: 0 20px;
  border-radius: 25px;
  display: flex;
  align-itens: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  font-size: 26px;
  background: #eee;
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
  :hover {
    transition-delay: 1s;
    background: linear-gradient(200deg, #eee, #57acdc);
  }
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 5px;
  margin-left: 40%;
  border-radius: 5px;
  width: 10rem;
  height: 4rem;
  font-size: 24px;
  font-weight: 700;
  transition: all 2s ease-out;
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
