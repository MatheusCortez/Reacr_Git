import styled from "styled-components"
import { Link } from "react-router-dom"
export const title =styled.h1 `
    text-align:center;
    font-size:2rem;
    font-family:sans-serif;
    color:#333;


`

export const List = styled.ul`
    list-style:none;
    padding:none;
    font-family:sans-serif;
`

export const ListItem = styled.li `
    margin: .5rem 0;

`


export const LinkHome = styled(Link)`
    color:white;
    display:block.
    width:4rem;
    text-align:center;
    margin:2rem auto;
    background-color:#000;

`