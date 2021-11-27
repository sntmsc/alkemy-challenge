import React from 'react'
import Tittle from './Tittle'
import Search from './Search'
import BackTeam from './BackTeam'
import Logout from './Logout'
import { useLocation } from 'react-router'
const Layout = ({setLoading}) =>{
  const location = (useLocation().pathname);

    return(
      <>
        <Tittle/>
        {location !== '/login' &&
          <>
            <Search setLoading={setLoading}/>
            <Logout/>
          </>
        }
       {location !== '/home' && location !== '/login' && 
        <BackTeam/>
        } 
        
      </>
    )
  }

  export default Layout 