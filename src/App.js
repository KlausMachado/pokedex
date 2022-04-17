import "./App.css";
import { GlobalStyled } from "./component/cards/tags-stayle";
import ColectionOfPokemons from "./component/cards/renderPokemonList";

function App() {
  return (
    <>
      <GlobalStyled />
      <ColectionOfPokemons />
    </>
  );
}
export default App;
