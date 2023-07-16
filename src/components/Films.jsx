import { useState, useEffect } from "react";

export default function Films ({data}){
    const [filmData, setFilmData] = useState('')    
    
    
    async function getFilms() {
        let filmNames = [];
        for(let film of data){
            
            let response = await fetch(film)
            // console.log(response)
            let filmData1 = await response.json()
            // console.log(filmData1)
            filmNames.push(filmData1.title)
        }
        // console.log(filmNames.join(', '))
        setFilmData(filmNames.join(', '))         
       
      }
    
      useEffect(() => {
        getFilms()
      }, [])

      return(
        <div><b>films:</b> {filmData}</div>
      )

}