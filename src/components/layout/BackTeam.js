import React from 'react'
import { Link } from 'react-router-dom'
const BackTeam = () =>{
    return(
      <div className="container-fluid row d-flex"> 
      <div className="col-7 col-sm-5 col-md-4 col-lg-2 btn btn-primary d-flex 
      justify-content-center align-items-center back-team rounded-pill p-0 ">
        <Link to='/home' className="container-fluid d-flex"style={{textDecoration: 'none',color:'black', margin:'0'}}>
        <div className="container m-0 p-0" style={{width:'2em'}}>
          <img src="./icons/back.png" alt="back" className="img-fluid" />
        </div>
        <p className="fs-3 fw-bold ms-2 m-0" style={{fontFamily: "'Genos', sans-serif"}}>my team</p>
        </Link>
      </div>
    </div>
    )
  }

  

  export default BackTeam 