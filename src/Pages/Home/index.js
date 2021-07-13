import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router';
const Home = () => {
    const history = useHistory();
    const [usuario,setUsuario] = React.useState('');
    function handlePesquisa(){
        axios.get(`https://api.github.com/users/${usuario}/repos`)
        .then(response =>{
            const repositories = response.data;
            const repositoriesName =[];
           repositories.map((repository)=>{
               repositoriesName.push(repository.name)
           })
           localStorage.setItem('repositoriesName',JSON.stringify(repositoriesName))
           history.push('/repositories')
        })
    }
    return (
        <>
            <input className="usuarioInput" placeholder="Digite o nome do usuario" value={usuario} 
            onChange= {e=>setUsuario(e.target.value)}/>
            <button type="button" onClick={handlePesquisa}>Pesquisar</button>
        </>
    )
}

export default Home
