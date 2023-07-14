import { useState } from "react"

export default function Starships({data}) {
    console.log(data)
    const [display, setDisplay] = useState(false)
    // const [buttonId, setButtonId] = useState(0)

    function handleClick(event){
        console.log(event)
        setDisplay((previousState)=> !previousState)
        
  
    }
    return (
        <div className='box'>
            {data.map((ship, index)=>(
                <div className='starship' key={ship.name}>
                <button id={index} onClick={(event)=> handleClick(event)} key={ship.name}>{ship.name}</button>
                {display && true ? <h2>crew: {ship.crew}</h2> : null}
                
                </div>            
            ))}
        </div>
    )
}

//, setDisplay((prevState)=> !prevState)
// e.target.id

// data[id] -> ship object
