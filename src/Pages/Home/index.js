import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router';
import * as S from './styled'
const Home = () => {
    const history = useHistory();
    const [usuario,setUsuario] = React.useState('');
    const [erro, setErro] = React.useState(false)
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
        .catch(err =>{
            setErro(true)
        })
    }
    return (

        <S.container>
            <S.input className="usuarioInput" placeholder="Digite o nome do usuario" value={usuario} 
            onChange= {e=>setUsuario(e.target.value)}/>
            <S.btn type="button" onClick={handlePesquisa}>Pesquisar</S.btn>
            {erro?<S.erroMgs>Ocorreu um Erro. Tente Novamente</S.erroMgs>:''}
           

        </S.container>
    )
}

export default Home
