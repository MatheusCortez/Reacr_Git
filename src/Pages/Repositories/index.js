import React from 'react'
import * as S from './styled'
import { useHistory } from 'react-router-dom';

const Repositories = () => {
    const history = useHistory()
    const [repositories, setrepositories] = React.useState([]);

    React.useEffect(()=>{
        let repositoriesName = localStorage.getItem('repositoriesName')
        if(repositoriesName!=null){
            repositoriesName =JSON.parse(repositoriesName);
            setrepositories(repositoriesName)
            localStorage.clear()
        }else{
            history.push('/')
        }
      
    },[])
    return (
        <>
        <S.title>Repositorios</S.title>
        <S.List>
            {repositories.map(repository =>{
                return (
                    <S.ListItem>Repositorio: {repository}</S.ListItem>
                )
            })}
        </S.List>
           <S.LinkHome to='/' >Voltar</S.LinkHome> 
      </>
    )
}

export default Repositories
