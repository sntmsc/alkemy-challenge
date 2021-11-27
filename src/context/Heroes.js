import {createContext, useState} from 'react'

const ContextHeroesTeam= createContext(),
 ContextHeroesSearch = createContext();

export const HeroesTeam = ({children}) => {
    const [heroesTeam, setHeroesTeam] = useState([])

    return(
        <ContextHeroesTeam.Provider value={{heroesTeam, setHeroesTeam}}>{children}</ContextHeroesTeam.Provider>
    )

}

export const HeroesSearch = ({children}) => {
    const [heroesSearch, setHeroesSearch] = useState([])

    return(
        <ContextHeroesSearch.Provider value={{heroesSearch, setHeroesSearch}}>{children}</ContextHeroesSearch.Provider>
    )

}

//const {heroes,setHeroes} = useContext(ContextHeroes); 

export {ContextHeroesTeam, ContextHeroesSearch}