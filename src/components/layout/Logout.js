import {useContext} from 'react'
import useLocalStorage from '../../hooks/useLocalStorage'
import { useNavigate } from 'react-router'
import { ContextSaveToken } from '../../context/SaveToken'

const Logout = () => {
    const [token, setToken] = useLocalStorage('token','');
    const {setSaveToken} = useContext(ContextSaveToken);
    const navigate = useNavigate();

    return(
        <div className="row container-fluid d-flex position-absolute" style={{top:'.5em'}}>
            <button className=" btn btn-info col-2 col-md-1 d-flex justify-content-center position-absolute p-1" 
            onClick={()=>{setToken('');setSaveToken('');navigate('/login')}}
            style={{right:'.3em'}}>

            <div className="container m-0 p-0" style={{width:'2em'}}>
                <img src="./icons/log-out.png" className="img-fluid" alt="search"/>
            </div>
            </button>
        </div>
        
    )
}

export default Logout 