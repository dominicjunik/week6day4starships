import { useState, useEffect } from "react";

export default function Pilots ({data}){
    const [pilotsData, setPilotsData] = useState('')    
    console.log('pilots')
    
    async function getPilots() {
        console.log('here')
        let pilotsNames = [];        
        for(let pilot of data){
            
            let response = await fetch(pilot)
            console.log(response)
            let pilotData1 = await response.json()
            // console.log(filmData1)
            pilotsNames.push(pilotData1.name)
        }
        console.log(pilotsNames.join(', '))
        setPilotsData(pilotsNames.join(', '))
        console.log(pilotsData)         
         
      }
    
      useEffect(() => {
        getPilots()
      }, [])

      return(
        <div><b>pilots:</b> {pilotsData}<br /><br /></div>
      )

}