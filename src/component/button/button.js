import { useContext } from "react";
import styledComponents from "styled-components";
import { ThemeContext } from "../../contexts/themeContext";

export const Button = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Btn
      {...props}
      style={{
        color: theme.color,
        background: theme.background,
      }}
    ></Btn>
  );
};

const Btn = styledComponents.button`
  padding: 2px; 
  width: 150px;
  height: 50px;
  font-size: 23px;
  font-weight: bold;
  margin: 10px;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 100px;
    margin-left: 6%;
  }
`;
