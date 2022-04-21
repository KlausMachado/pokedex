import React, { createContext, useState } from "react";

export const themes = {
  light: {
    background: "#eee",
    color: "#000",
  },
  dark: {
    background: "#000",
    color: "#fff",
  },
};

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.light)
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
