import { numberLimit, baseUrl } from "./variables";

export async function getColectionPokemons() {
  const response = await fetch(`${baseUrl}?limit=${numberLimit}`);
  const responseJson = await response.json();
  return responseJson.results;
}

export async function getPokemons(param) {
  return param.map(async (props) => {
    const response = await fetch(`${baseUrl}${props.name}`);
    const responseJson = await response.json();
    // console.log(responseJson)

    return responseJson;
  });
}
