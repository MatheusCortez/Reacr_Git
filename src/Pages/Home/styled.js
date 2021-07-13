import styled from "styled-components"


export const container = styled.div`
    margin:20% 40% ;
  
`
export const input = styled.input`
    border:none;
    border-bottom:1px solid black;
    margin-right:30px;
    width:100%;
    display:block;

    &:focus,&:active{
        outline:none;
        box-shadow:none
    }

`
export const btn = styled.button`
    background-color:#000;
    margin-top:20px;
    width:100%;
    height:30px;
    color:white;



`
export const erroMgs = styled.span`



`