import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemonCardInfo } from "../component/cards/renderPokemonDetails";
import ColectionOfPokemons from "../component/cards/renderPokemonList";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ColectionOfPokemons />} />
        <Route exact path="/:id" element={<PokemonCardInfo />} />
      </Routes>
    </BrowserRouter>
  );
};
