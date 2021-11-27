import {useContext, useState} from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import Login from './components/sections/Login'
import Team from './components/sections/Team'
import SearchResults from './components/sections/SearchResults'
import Details from './components/sections/Details'
import { HeroesTeam, HeroesSearch } from './context/Heroes'
import { ContextSaveToken } from './context/SaveToken'
import { SetDetails } from './context/SetDetails'


function App() {
  
  
  const {saveToken} = useContext(ContextSaveToken);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const PrivateRoute = ({children}) => {
    return saveToken === '' ? <Navigate to='/login'/> : children 
  }

  return (
    <BrowserRouter>
      <HeroesSearch>
      <HeroesTeam>
      <SetDetails>
          <Layout setLoading ={(status)=>setLoadingSearch(status)}/>
          <Routes>
            <Route path="/" 
            element={ 
              saveToken !=='' ? 
              <Navigate to='/home'/> :
              <Navigate to='/login'/>
            }/>

            <Route path={'/login'} element={
                  <Login/>
                  }/>

            <Route path={'/home'} element={
                  <PrivateRoute>
                  <Team/>
                  </PrivateRoute>
                  }/> 
            
            <Route path={'/details'} element={
                  <PrivateRoute>
                  <Details/>
                  </PrivateRoute>
                  }/> 

            <Route path={'/results'} element={
              <PrivateRoute>
                  <SearchResults loading={loadingSearch}/>
                </PrivateRoute>
                  }/> 

          </Routes>
        </SetDetails>
        </HeroesTeam>
        </HeroesSearch>
    </BrowserRouter>
  );
}

export default App;
