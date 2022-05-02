import React, { createContext, useState } from "react";

export const themes = {
  light: {
    background: "#eee",
    color: "#000",
    src: "\u2600"
  },
  dark: {
    background: "#494848",
    color: "#fff",
    src: "\uDF15"
  },
};

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(themes.light);
  return (
    <ThemeContext.Provider value={{ theme, setTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
};
