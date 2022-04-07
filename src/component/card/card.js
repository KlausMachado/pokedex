import styled from 'styled-components'

const Section = styled.section`
    padding: 10px;
    margin: 20px;
    border-radius: 25px; 
    width: 60vw;
    display: flex;
    align-itens: center;
    justify-content: center;
    flex-direction: column;
`

const Ul = styled.ul`
    display: flex;
    align-itens: center;
    justify-content: space-between;
    wrap: wrap;
`
const Li = styled.li`
    border: solid 2px black;
    border-radius: 5px;
    list-style-type: none;
`

const Button = styled.button`
    padding: 5px;
    margin: 2px;
    border-radius: 5px;
    width: 30%
`

export {Section, Ul, Li, Button}