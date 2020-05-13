import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [imgLink, setImgLink] = useState("")
  const [date, setDate] = useState("");
  const [explanation, setExplanation] = useState("");
  const [title, setTitle] = useState("");
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=jEO61xQVaCf47CVVM7eVDyA74QXSPIZ3YpUOVaqU")
      .then(res => { 
        setImgLink(res.data.url)
        setDate(res.data.date)
        setExplanation(res.data.explanation)
        setTitle(res.data.title)
      })
  }, [])
  return (
    <div className="App">
      <h1>{title}</h1>
      <h3>{date}</h3>
      <img src={imgLink} alt=""/>
      <p>{explanation}</p>
    </div>
  );
}

export default App;
