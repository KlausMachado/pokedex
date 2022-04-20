import { baseUrl } from "../variables";
import { Img, Section, H1, Ul, Ol, Li, P } from "./tags-stayle";

export async function PokemonCardInfo(id) {
  const response = await fetch(`${baseUrl}${id}`)
  const responseJson = await response.json()
  console.log(responseJson)

  const types = responseJson.types;
  const moves = responseJson.moves;
  const abilities = responseJson.abilities;

  return (
    <Section
      style={{
        background: "linear-gradient(to top, #ede9d8 , #d4e4ed)",
        display: "block",
        padding: "50px",
      }}
    >
      <Img src={responseJson.sprites.front_default} />
      <H1>{responseJson.name}</H1>
      <Ul style={{ justifyContent: "center" }}>
        {types.map((types, i) => {
          const type = types.type.name;
          return <Ol key={i}>{type}</Ol>;
        })}
      </Ul>
      <Ul
        style={{
          display: "block",
          padding: "0",
          background: "linear-gradient(to right, #E4E7E0 , #D9E5E8)",
        }}
      >
        <Li>
          {moves.map((moves, i) => {
            const move = moves.move.name;
            return <P key={i}>{move}</P>;
          })}
        </Li>
      </Ul>
      <Ul
        style={{
          padding: "0",
          background: "linear-gradient(to left, #ede9d8 , #dbd2cf)",
        }}
      >
        <Li>
          {abilities.map((abilities, i) => {
            const ability = abilities.ability.name;
            return (
              <P style={{ fontWeight: "bold" }} key={i}>
                {ability}
              </P>
            );
          })}
        </Li>
      </Ul>
    </Section>
  );
}
