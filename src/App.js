import React, {useEffect, useState} from "react";
import "./App.css";
import axios from 'axios';
import Photo from './Components/Photo.js'
import styled from "styled-components"

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

  const DataContent = styled.ul`
    color: #5f5f5f;
    justify-content: center;
    margin: auto;
    width: 75%;
`

  return (
    <div className="App">
      <div className="content-container">
        <Photo photo={photo}/>
        <DataContent>
          <li> Title: {photo.title}</li>
          <li> Date: {photo.date}</li>
          <li> Explanation: {photo.explanation}</li>
          <li> URL: <a href={photo.url}>{photo.url}</a></li>
        </DataContent>
      </div>
    </div>
  );
}

export default App;
