import {useContext, useState} from 'react'
import axios from 'axios'
import { ContextHeroesSearch } from '../../context/Heroes';
import { useNavigate, useLocation } from 'react-router';

const Search = ({setLoading}) =>{
  const {setHeroesSearch} = useContext(ContextHeroesSearch);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) =>{
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if(location.pathname !== '/results') navigate("/results");
      axios.get(`https://www.superheroapi.com/api.php/10159999103073384/search/${search}`)
        .then(response => {
          setHeroesSearch(response.data.results)
          setSearch('')
          setLoading(false);
        }).catch(error => {
          console.log(error);
          })
    
  }

    return(
      <div className="container w-100 d-flex justify-content-center mt-5 ">
        <form onSubmit={handleSubmit} className="row mb-5 w-100 d-flex justify-content-center">
          <div className="col-12 col-md-6 d-flex">
            <input type="text" className="form-control" value={search} onChange={handleChange} placeholder="Search hero for your team"/>
              <button className="btn btn-outline-secondary" type="submit" style={{width:'3em'}}>
                <img src="./icons/search.png" className="img-fluid" alt="search"/>
              </button>
          </div>
        </form>
      </div>
    )
  }

  export default Search 