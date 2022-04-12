import "./App.css";
import { Infos } from "./component/card/card-infos";
import { GlobalStyled } from "./component/card/tags-stayle";
import ColectionOfPokemons from "./component/renderPokemonList";

function App() {
  return (
    <>
      <GlobalStyled />
      <ColectionOfPokemons />
      <Infos />
    </>
  );
}
export default App;
