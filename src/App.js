
import React from 'react'
import axios from 'axios'

function App(props) {

  const [usuario,setUsuario] = React.useState('')

   function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then (response => console.log(response.data))
    
  
    } 

  return (
    <>
      <h1>{props.title} {props.user}</h1>
    <input className="" placeholder="Digite seu Usuario" value={usuario} onChange={(e)=> setUsuario(e.target.value)}/>
    <button type="button" onClick={handlePesquisa}>Pesquisar</button>

    <p>{usuario}</p>
    </>
  
  );
}

export default App;
