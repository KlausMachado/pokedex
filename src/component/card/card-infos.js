import { Img, Section, H1, Ul, Ol, Li, P } from "./tags-stayle";

export const Infos = () => {
  return (
    <>
      <Section
        style={{
          background: "linear-gradient(to top, #ede9d8 , #d4e4ed)",
          display: "block",
          padding: "50px",
        }}
      >
        <Img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png" />
        <H1>Name</H1>
        <Ul style={{ justifyContent: "center" }}>
          <Ol>Tipo</Ol>
          <Ol>Tipo</Ol>
        </Ul>
        <Ul
          style={{
            display: "block",
            padding: "0",
            background: "linear-gradient(to right, #E4E7E0 , #D9E5E8)",
          }}
        >
          <Li>
            <P>Moves</P>
            <P>Moves</P>
            <P>Moves</P>
            <P>Moves</P>
          </Li>
        </Ul>
        <Ul
          style={{
            padding: "0",
            background: "linear-gradient(to left, #ede9d8 , #dbd2cf)",
          }}
        >
          <Li>
            <P style={{fontWeight: 'bold'}}>
              Abilities: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quos repellat voluptas nam ut, temporibus eius sit
              laboriosam saepe fuga deserunt, vel animi! Incidunt reprehenderit
              sint magni autem dolores cupiditate assumenda.
            </P>
            <P style={{fontWeight: 'bold'}}>
              Abilities: Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Dolorem vel in nisi quibusdam eos, molestias adipisci iste
              cupiditate! Qui suscipit nihil vero voluptates! Commodi
              doloremque, cumque id excepturi asperiores est!
            </P>
          </Li>
        </Ul>
      </Section>
    </>
  );
};
