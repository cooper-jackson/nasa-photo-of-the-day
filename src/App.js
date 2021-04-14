import React, {useEffect, useState} from "react";
import "./App.css";
import axios from 'axios';
import Photo from './Photo.js'
import DataContent from './DataContent.js'

function App() {

  
  const [photo, setPhoto] = useState({})

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=Ex3CnnMYyRW1bdW2n8BmPM47nvHolhcTm7YErOyJ`)
    .then(res => {
      setPhoto(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
      <div className="content-container">
        <Photo photo={photo}/>
        {console.log(photo)}
        <DataContent photo={photo}/> */
      </div>
    </div>
  );
}

export default App;
