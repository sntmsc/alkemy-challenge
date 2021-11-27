import {createContext, useState} from 'react'

export const ContextDetail= createContext()

export const SetDetails = ({children}) => {
 
    const [details, setDetails] = useState([]);

    return(
        <ContextDetail.Provider value={{details, setDetails}}>{children}</ContextDetail.Provider>
    )}