import "./App.css";
import { Infos } from "./component/cards/card-infos";
import { GlobalStyled } from "./component/cards/tags-stayle";
import ColectionOfPokemons from "./component/cards/renderPokemonList";

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
