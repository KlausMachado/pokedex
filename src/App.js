import "./App.css";
import { GlobalStyled } from "./component/card/card";
import ColectionOfPokemons from "./component/getPokemon";

function App() {
  return (
    <>
      <GlobalStyled />
      <ColectionOfPokemons />
    </>
  );
}
export default App;
