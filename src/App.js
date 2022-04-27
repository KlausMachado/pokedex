import { ThemeProvider } from "./contexts/themeContext";
import "./App.css";
import {  GlobalStyled } from "./component/cards/tags-stayle";
import { ThemeTogglerButton } from "./component/theme-toggler-button/themeTogglerButton";
import { AppRoutes } from "./pages/routes";

function App() {
  return (
    <>
      <ThemeProvider>
          <ThemeTogglerButton />
          <GlobalStyled />
          <AppRoutes />
      </ThemeProvider>
    </>
  );
}
export default App;
