import { getColectionPokemons } from "../getPokemon"
import { numberLimit } from "../variables";


export const MorePokemons = () => {
     numberLimit.value += 5
     return getColectionPokemons(numberLimit.value)
}