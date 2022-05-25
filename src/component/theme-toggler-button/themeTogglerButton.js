import { useContext } from "react";
import styledComponents from "styled-components";
import { ThemeContext, themes } from "../../contexts/themeContext";
import { Button } from "../button/button";
import "./buttonTheme.css";

function changesImage(theme) {
  const classes = document.querySelector(".image");
  if (theme === themes.dark) {
    classes.classList.remove("light");
    classes.classList.add("dark");

    console.log(classes);
  } else {
    classes.classList.remove("dark");
    classes.classList.add("light");
  }
}

export const ThemeTogglerButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <header style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
      <H1>POKEDEX</H1>
      <Button
        className="buttonTheme"
        onClick={() => {
          setTheme(theme === themes.light ? themes.dark : themes.light);
          changesImage(theme);
        }}
      >
        <a className="image dark"></a>
      </Button>
    </header>
  );
};

const H1 = styledComponents.h1`
  position: absolute;
  top: -60%;
  font-size: 106px;
  font-family: Bangers;
  color: #FDCF00;
  letter-spacing: .4rem;
  text-shadow: 0.1em 0.1em 0.2em #406c84;

  @media (max-width: 425px) {
    font-size: 50px;
    top: 60%;

  };
`;
