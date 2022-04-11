import "./App.css";
import { Infos } from "./component/card-infos";
import { GlobalStyled } from "./component/card/card";
import ColectionOfPokemons from "./component/getPokemon";

function App() {
  return (
    <>
      <GlobalStyled />
      <ColectionOfPokemons />
      <Infos/>
    </>
  );
}
export default App;
