import {useContext, useState} from 'react' 
import  Card  from '../utilities/Card'
import GridContainer from '../utilities/GridContainer'
import { ContextHeroesSearch ,ContextHeroesTeam} from '../../context/Heroes'

const SearchResults = ({loading}) => {
  const {heroesSearch} = useContext(ContextHeroesSearch);
  const {heroesTeam,setHeroesTeam} = useContext(ContextHeroesTeam);
  const [alignmentAlert, setAlignmentAlert] = useState('')

  const controlledRepeat = (hero) =>{
    setTimeout(()=> setAlignmentAlert(''),3000) 
    if(heroesTeam.find( x => x === hero) === undefined){
      controlledAlignment(hero);
    }
    else{
      setAlignmentAlert('');
      setAlignmentAlert('This hero is already in the team'); 
    }
  }

  const controlledAlignment = (hero) => {
    let goodHeroes = 0,
    badHeroes = 0
    heroesTeam.forEach( x => {
 
      if(x.biography.alignment === 'good') {goodHeroes+=1}
      else if(x.biography.alignment === 'bad') {badHeroes+=1}
    })


    if(hero.biography.alignment !== 'good' && hero.biography.alignment !== 'bad'){
      setAlignmentAlert('');
      setAlignmentAlert('Only good or bad heroes are allowed');
    }

    else if((hero.biography.alignment === 'good' && goodHeroes < 3) || 
      (hero.biography.alignment === 'bad' && badHeroes < 3)){
      let heroesAdd = heroesTeam.concat(hero)
      setAlignmentAlert('');
      setAlignmentAlert('The hero is successfully added!');

      let heroesOrder = heroesAdd.sort((a,b)=> { 
        if(a.biography.alignment < b.biography.alignment) return -1 ;
        if(a.biography.alignment > b.biography.alignment) return 1;
        return 0 
      })

    setHeroesTeam(heroesOrder);
    }
    else{
      setAlignmentAlert('Only three good and three bad heroes are allowed for your team.')
    }
  }

  const alertClass = () => alignmentAlert === 'The hero is successfully added!' ?
      "col-9 col-md-5 alert alert-success alert-dismissible fade show text-center" : 
      "col-9 col-md-5 alert alert-danger alert-dismissible fade show text-center"

  const showCards = ()=> 

      heroesSearch  ?

       heroesSearch.map( x =>
      <div key={x.id} className="col-11 col-md-6 col-lg-4 d-flex justify-content-center">
      <Card 
      format='search'
      name={x.name}
      img={x.image.url}
      alignment={x.biography.alignment}
      add={()=>{
        controlledRepeat(x);
      }}/>
      </div> ) :
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <p className="fst-italic fs-3 m-0 p-0">No results</p>
      </div>

  

  
    return(
      <>
        <GridContainer>
            {loading ?
              <div className="container-fluid d-flex justify-content-center align-items-center">
                <p className="fst-italic fs-3 m-0 p-0">Loading...</p>
              </div> :
                showCards()}
        </GridContainer>
        { alignmentAlert && 
        <div className="container-fluid d-flex justify-content-center fixed-bottom">
          <div className={alertClass()}  role="alert">
            {alignmentAlert}
            <button type="button" className="btn-close" data-dismiss="alert" aria-label="Close" onClick={()=>setAlignmentAlert('')}></button>
        </div>
        </div>
        }

      </>
      )
    } 

    export default SearchResults 