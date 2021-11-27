import {useContext} from 'react'
import { ContextDetail } from '../../context/SetDetails';


const Details = () => {

  const {details} = useContext(ContextDetail);
console.log(details.img)

  const showData = (arr) => arr.map( (x,i) =>
<div key={i}className="d-flex row p-0 mb-3 justify-content-center">
  <p className="card-text fw-bold fs-6 me-3 col-5 col-md-3 m-0">{x.detail}</p>
  <p className="card-text fs-6 col-5 col-md-3 m-0">{x.value}</p>
</div>
)


    return(
      <div className="container-fluid row d-flex justify-content-center mt-3">
        <div className="card mb-3 col-12 col-sm-9 col-md-8 col-lg-7 bg-light">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={details.img} className="img-fluid rounded-start" alt="hero"/>
            </div>
            <div className="col-md-8">
              <div className="card-body ms-3 p-0 w-100 ">
                <h2 className="tittle-custom">{details.name}</h2>
                {details.det ? 
                  showData(details.det)  : 
                  <p className="fst-italic fs-3">Please, select details from your hero</p> }
                  
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default Details 