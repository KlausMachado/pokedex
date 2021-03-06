import { baseUrl } from "./variables";

export async function getColectionPokemons(numberLimit, offset) {
  const response = await fetch(`${baseUrl}?limit=${numberLimit}&offset=${offset}`);
  const responseJson = await response.json();
  return responseJson.results;
}

export async function getPokemons(param) {
  return param.map(async (props) => {
    const response = await fetch(`${baseUrl}${props.name}`);
    const responseJson = await response.json();

    return responseJson;
  });
}
