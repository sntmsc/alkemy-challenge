import {useContext} from 'react' 
import Card from '../utilities/Card' 
import Powerstats from '../utilities/Powerstats'
import GridContainer from '../utilities/GridContainer'
import { ContextHeroesTeam } from '../../context/Heroes';
import { ContextDetail } from '../../context/SetDetails';

  const Team = () =>{
    const {heroesTeam, setHeroesTeam} = useContext(ContextHeroesTeam);
    const {setDetails} = useContext(ContextDetail);

    const teamCount = (team, prop1, prop2) =>{
      let count=0;
      const value = (x) => prop1 === 'powerstats' ?
                 parseInt(x[prop1][prop2]) : 
                 parseInt(x[prop1][prop2].find((x,i)=> i === 1))
      team.forEach(x =>{
        const controlledValue = () =>isNaN( value(x)) ? 0 : value(x);
        count+= controlledValue()})
      return parseInt(count/team.length);
    }

    const teamPowerstats = () => 

      [{powerstat:'Intelligence: ', level:teamCount(heroesTeam,'powerstats','intelligence') },  
      {powerstat:'Strength: ', level:teamCount(heroesTeam,'powerstats','strength')},
      {powerstat:'Speed: ', level:teamCount(heroesTeam,'powerstats','speed')},
      {powerstat:'Durability: ', level:teamCount(heroesTeam,'powerstats','durability')},
      {powerstat:'Power: ', level:teamCount(heroesTeam,'powerstats','power')},
      {powerstat:'Combat: ', level:teamCount(heroesTeam,'powerstats','combat')}]



    const teamDetails = () =>{
        let arr = [
          {detail:'Height:', value:teamCount(heroesTeam,'appearance','height'), unit:' cm'},
          {detail:'Weight:', value:teamCount(heroesTeam,'appearance','weight'), unit:' kg'}
        ]
       return showDetails(arr);
    }
    
    const showPowerstat = (value) => isNaN(parseInt(value)) ? 0 : value;

    const showDetails = (arr) => arr.map( (x,i) =>
      <div key={i}className="d-flex">
        <p className="card-text fw-bold fs-5 me-3">{x.detail}</p>
        <p className="card-text fs-5">{x.value}{x.unit}</p>
      </div>
    )

    const removeHero = (x) =>{
      let removed = [...heroesTeam].filter(z => z !== x);
      setHeroesTeam(removed);
    }
    
    return(
      <>
        <div className="container d-flex justify-content-end ">
        <h2 className="subtittle-custom">My team</h2>
        </div>
            <GridContainer>
              {heroesTeam.length === 0 ? 

                  <div className="container-fluid d-flex justify-content-center">
                    <p className="fst-italic fs-3">No heroes in the team</p>
                  </div> : 

                  heroesTeam.map((x,i) => 
                    <div key={i} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                      <Card 
                        name={x.name}
                        img={x.image.url} 
                        alignment={x.biography.alignment}

                        powerstats={[
                        {powerstat:'Intelligence: ', level:showPowerstat(x.powerstats.intelligence)},
                        {powerstat:'Strength: ', level:showPowerstat(x.powerstats.strength)},
                        {powerstat:'Speed: ', level:showPowerstat(x.powerstats.speed)},
                        {powerstat:'Durability: ', level:showPowerstat(x.powerstats.durability)},
                        {powerstat:'Power: ', level:showPowerstat(x.powerstats.power)},
                        {powerstat:'Combat: ', level:showPowerstat(x.powerstats.combat)}]} 

                        details={
                          {det:[{detail:'Weight:',value:x.appearance.weight[1]},
                          {detail:'Height:',value:x.appearance.height[1]},
                          {detail:'Full-name:',value:x.biography['full-name']},
                          {detail:'Aliases:',value:x.biography.aliases.join(', ')},
                          {detail:'Eye color:',value:x.appearance['eye-color']},
                          {detail:'Hair color:',value:x.appearance['hair-color']},
                          {detail:'Workplace:',value:x.work.occupation}
                          ],
                          img:x.image.url,
                          name:x.name}
                        } 
                        
                        format='team'
                        setDetails={(d)=>setDetails(d)}
                        remove={()=>removeHero(x)}/>
              </div>
              )}
            </GridContainer>
        {heroesTeam.length > 0 && 
          <>
            <div className="container d-flex justify-content-center mt-5">
              <h2 className="subtittle-custom">Team powerstats</h2>
            </div>
            <div className="row">
              <div className="container col-10 col-sm-8 col-lg-6 col-xl-5 
              border border-secondary bg-light rounded mt-3 mb-3 p-3">
                  <Powerstats stats={teamPowerstats()} isTotal={true}/>
              </div>
            </div>

          <div className="container d-flex justify-content-center mt-5">
            <h2 className="subtittle-custom">Team details</h2>
          </div>
          <div className="row">
            <div className="container col-10 col-sm-8 col-lg-6 col-xl-5 
            border border-secondary bg-light rounded mt-3 mb-3 p-3">
                {teamDetails()}
            </div>
          </div>
          </>
        }
      </>
    )
  }

  export default Team 