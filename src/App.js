import "./App.css";
import { GlobalStyled } from "./component/cards/tags-stayle";
import { AppRoutes } from "./pages/routes";

function App() {
  return (
    <>
      <GlobalStyled />
      <AppRoutes />
    </>
  );
}
export default App;
