import { useState, useEffect } from 'react'
import './App.css'
import Starships from './components/Starships'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])
  
 

  async function getData() {
    
    let api = "https://swapi.dev/api/starships/"

    let response = await fetch(api)
    const ships = await response.json();
    // console.log(ships.results)
    setData(ships.results)
    console.log(data)   
  }

  return (
    <div>
      <nav><h1>STAR WARS STARSHIPS</h1></nav>
      <Starships data={data} />
    </div>
  )
}

export default App
