import { useContext } from "react";
import { ThemeContext, themes } from "../../contexts/themeContext";
import { Button } from "../button/button";

export const ThemeTogglerButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div style={{display: 'flex', position: 'relative'}}>
      <h1 style={{ 
        position: 'absolute', 
        right: '36%',
        top: '-60%', 
        fontSize: '106px', 
        fontFamily: 'Bangers',
        color: '#FDCF00',
        letterSpacing: '.4rem',
        textShadow: '0.1em 0.1em 0.2em #406c84'
        }}>POKEDEX</h1>
      <Button
        onClick={() =>
          setTheme(theme === themes.light ? themes.dark : themes.light)
        }
      >
        {" "}
        Clique aqui
      </Button>
    </div>
  );
};
