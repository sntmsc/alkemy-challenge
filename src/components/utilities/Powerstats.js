import React from 'react'

const Powerstats = ({stats, isTotal}) => {
  
  const arr = [...stats]
     if(isTotal){
      arr.sort(function(a, b){return b.level - a.level})
     }

     const elements= arr.map( (x,i) => 
     <div key={i} className="p-2">
       <div className="progress">
         <div className="progress-bar" role="progressbar" style={{width: `${x.level}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
       </div>
       <p className="card-text">{x.powerstat}{x.level}</p>
     </div>
     )

     return(
       <>
       {elements}
       </>
     )
   }

   export default Powerstats 