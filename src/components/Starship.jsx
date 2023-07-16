import { useState } from 'react'
import Films from './films'
import Pilots from './Pilots'


export default function Starship({ship, index}) {

    const [display, setDisplay] = useState(false)

    
    function handleClick(event){
        console.log(event)
        setDisplay((previousState)=> !previousState)    
    }

    function DisplayData(){
        console.log('function enter')
        let array = ['pilots', 'films', 'url']
        return (
            Object.entries(ship).map((shipDetail, index)=>
                    // console.log(shipDetail)
                    // shipDetail[0] === 'film' ?
                    {switch(shipDetail[0]){
                        case 'pilots' : return <Pilots data={shipDetail[1]}/> ;
                        case 'url' : return null;
                        case 'films' : return <Films data={shipDetail[1]}/>;
                        default: return (
                            <div>
                                <p>
                                    <b>{shipDetail[0]}</b>: {shipDetail[1]}
                                </p>
                            </div> 
                        ) 
                             
                    }}
                              
            ) 
        )
         // use .join for pilots      
        console.log('ENTRIES') 
        console.log(entries)       

    }

    

    return (
        <div className='starship'>
                <button id={index} onClick={(event)=> handleClick(event)} key={ship.name}>{ship.name}</button>
                {display && true ?  <DisplayData/> : null}
                
                </div> 
    )
}

{/* <h2>crew: {ship.crew}</h2> */}