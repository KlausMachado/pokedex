import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";

export const Button = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      {...props}
      style={{
        padding: '2px',
        color: theme.color,
        background: theme.background,
        width: "150px",
        height: "50px",
        fontSize: "23px",
        fontWeight: "bold",
        margin: "10px",
        borderRadius: "10px",
      }}
    ></button>
  );
};
