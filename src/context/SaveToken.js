import {createContext, useState} from 'react'
import useLocalStorage from '../hooks/useLocalStorage'


export const ContextSaveToken= createContext()

export const SaveToken = ({children}) => {
    const [token] = useLocalStorage('token', '');
    const [saveToken, setSaveToken] = useState(token);

    return(
        <ContextSaveToken.Provider value={{saveToken, setSaveToken}}>{children}</ContextSaveToken.Provider>
    )

}