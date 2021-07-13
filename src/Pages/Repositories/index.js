import React from 'react'
import * as S from './styled'
const Repositories = () => {

    const [repositories, setrepositories] = React.useState([]);

    React.useEffect(()=>{
        let repositoriesName = localStorage.getItem('repositoriesName')
        repositoriesName =JSON.parse(repositoriesName);
        setrepositories(repositoriesName)
        localStorage.clear()
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
      </>
    )
}

export default Repositories
