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
  transition: all 0.8s ease-in-out;
`;

export const Ul = styled.ul`
  display: flex;
  align-itens: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Li = styled.li`
  border-radius: 5px;
  box-shadow: 1px 1px 2px #406c84;
  list-style-type: none;
  margin-bottom: 10px;
  transition: all 0.8s;
  cursor: pointer;
  :hover {
    transform: scale(1.1, 1.1);
  }
`;

export const Button = styled.button`
  line-height: 50px;
  height: 50px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  width: 250px;
  cursor: pointer;
  color: #000;
  border: 0.5px;
  transition: all 0.3s;
  position: relative;
  left: 35%;
  ::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-top-style: solid;
    border-bottom-style: solid;
    border-top-color: #406c84;
    border-bottom-color: #406c84;
    transform: scale(0.1, 1.5);
  }
  :hover::before {
    opacity: 1;
    transform: scale(1, 1);
  }
  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.3s;
    background-color: rgba(255, 255, 255, 0.1);
  }
  :hover::after {
    opacity: 0;
    transform: scale(0.2, 1);
  }
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
  font-size: 50px;
  text-shadow: grey 0.1em 0.1em 0.2em;
  letter-spacing: 5px;
`;
