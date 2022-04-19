import { BrowserRouter, Route, Routes } from "react-router-dom"
import ColectionOfPokemons from "../component/cards/renderPokemonList"

export const AppRoutes = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<ColectionOfPokemons />} />
        </Routes>
    </BrowserRouter> )
}