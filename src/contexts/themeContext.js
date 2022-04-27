import React, { createContext, useState } from "react";

export const themes = {
  light: {
    background: "#eee",
    color: "#000",
    hover: "linear-gradient(200deg, #e4e7e0, #57acdc)",
    src: 'src/images/sol.gif'
  },
  dark: {
    background: "#494848",
    color: "#fff",
    hover: "linear-gradient(200deg, #000, #57acdc)",
    src: './src/images/noite.gif'
  },
};

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(themes);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
