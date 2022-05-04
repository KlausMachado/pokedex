import { useContext } from "react";
import { ThemeContext, themes } from "../../contexts/themeContext";
import { Button } from "../button/button";
import "./buttonTheme.css";

function changesImage(theme) {
  const classes = document.querySelector(".image");
  if (theme === themes.dark) {
    classes.classList.remove("light");
    classes.classList.add("dark")
    
    console.log(classes);
  } else {
    classes.classList.remove("dark");
    classes.classList.add("light");
  }
}

export const ThemeTogglerButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div style={{ display: "flex", position: "relative" }}>
      <h1
        style={{
          position: "absolute",
          right: "36%",
          top: "-60%",
          fontSize: "106px",
          fontFamily: "Bangers",
          color: "#FDCF00",
          letterSpacing: ".4rem",
          textShadow: "0.1em 0.1em 0.2em #406c84",
        }}
      >
        POKEDEX
      </h1>
      <Button
        className="buttonTheme"
        onClick={() => {
          setTheme(theme === themes.light ? themes.dark : themes.light);
          changesImage(theme);
        }}
      >
        <a className="image dark"></a>
      </Button>
    </div>
  );
};
