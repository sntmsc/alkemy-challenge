import React from 'react' 

const GridContainer = ({children}) => {
    return(
      <div className="container border border-secondary bg-light rounded mt-3 mb-3 p-3" style={{width:'90%'}}>
      <div className="container overflow-hidden">
        <div className="row gy-5 d-flex justify-content-center">
          {children}
        </div>
      </div>
    </div>
    )
  }

  export default GridContainer 