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
    margin: .8rem 0;
    background-color:#000;
    width:80%;
    color:white;
    text-transform:Uppercase;
    padding:.8rem auto;
    text-align:center;

`


export const LinkHome = styled(Link)`
    color:white;
    width:15px;
    text-align:center;
  
    background-color:#000;

`
