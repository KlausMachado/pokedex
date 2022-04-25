import { ThemeProvider } from "./contexts/themeContext";
import "./App.css";
import { Body, GlobalStyled } from "./component/cards/tags-stayle";
import { ThemeTogglerButton } from "./component/theme-toggler-button/themeTogglerButton";
import { AppRoutes } from "./pages/routes";

function App() {
  return (
    <>
      <ThemeProvider>
        <Body>
          <ThemeTogglerButton />
          <GlobalStyled />
          <AppRoutes />
        </Body>
      </ThemeProvider>
    </>
  );
}
export default App;
