import Starship from "./Starship"

export default function Starships({data}) {
    // console.log(data)
    
    // const [buttonId, setButtonId] = useState(0)

    
    return (
        <div className='box'>
            {data.map((ship, index)=>(
                <Starship key={crypto.randomUUID()} ship={ship} index={index}/>           
            ))}
        </div>
    )
}

//, setDisplay((prevState)=> !prevState)
// e.target.id

// data[id] -> ship object
