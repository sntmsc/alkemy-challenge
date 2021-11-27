import {useState} from 'react'
import { Link } from 'react-router-dom'
import Powerstats from './Powerstats'



  const Card = ({name, img, powerstats,details,setDetails,add, remove, format, alignment}) => {

    const [showPowerstats,setShowPowerstats] = useState(false);
    const togglePowerstats = () => {
      setShowPowerstats(!showPowerstats);
    }

    const alignmentValue = (a) => 
      a === 'good' ? 
      <p className="fw-bold fs-5 text-primary m-0 ">{alignment}</p> :
      a === 'bad' ? 
      <p className="fw-bold fs-5 text-danger m-0">{alignment}</p> : 
      <p className="fw-bold fs-5 text-secondary m-0">{alignment}</p> 
  
  
    return(
  <div className="card shadow p-1" style={{width:'18rem', height:'35em'}}>
    {!showPowerstats &&
    <img src={img} className="card shadow-img-top" alt="hero" style={{height:'20rem'}}/>
    }
    <div className="card-body">
      <div className="container-fluid d-flex justify-content-center p-0">
      <p className="fs-4 " style={{fontFamily:"Playfair Display SC, serif"}}>{name}</p>
      </div>
      {!showPowerstats &&
      <div className="container d-flex col-5 col-sm-4 justify-content-center p-1 mb-2 border border-secondary rounded bg-dark">
      {alignmentValue(alignment)}
      </div>
      }
    {showPowerstats &&
    <div className="container-fluid d-flex justify-content-center flex-column" style={{height:'20rem'}}>
      <Powerstats stats={powerstats} isTotal={false}/>
      </div>
    }
    <div className="row d-flex justify-content-center">
    {!showPowerstats && format === 'team' &&
      <div className=" col-10 view-powerstats d-flex p-2 border border-secondary rounded-pill " onClick={()=>togglePowerstats()}>
        
        <div className=" container " style={{width:'5em'}}>
          <img src="./icons/destello.png" alt="desplegar" className="img-fluid" style={{":hover":{cursor: "pointer"}}}/>
        </div>
      </div>
    }
    {showPowerstats &&
        <div className="col-3  hidden-powerstats container p-3" onClick={()=>togglePowerstats()}>
        <img src="./icons/contraer.png" alt="desplegar" className="img-fluid"/>
      </div>
    }
      </div>
  <div className="container d-flex justify-content-around mt-3">
  {format !== 'team' && 
      <button type="button" className="btn btn-warning fw-bolder" style={{width:'9em'}} onClick={add}>Add</button>
  }
  { format === 'team' &&
    <>
      <button type="button" className="btn btn-warning" onClick={remove}>Remove </button>
      <Link to='/details' type="button"
       className="btn btn-warning" onClick={()=>setDetails(details)}>Details</Link>
    </>
    }
  
  </div>
    </div>
  </div>
  
    )
  }

  export default Card 